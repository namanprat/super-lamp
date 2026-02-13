import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Track all splits and triggers for cleanup
const activeSplits = new WeakMap();
const splitElements = [];
const scrollTriggers = [];

function tweenToPromise(tween) {
  return tween ? new Promise((resolve) => tween.eventCallback("onComplete", resolve)) : Promise.resolve();
}

/**
 * Split text with minimal DOM manipulation
 * Uses data attributes for tracking and CSS for styling
 */
function createSplit(element, type = "words") {
  if (!element) return null;
  
  // Check if already split
  if (activeSplits.has(element)) {
    return activeSplits.get(element);
  }

  // Mark element before split for CSS targeting
  element.setAttribute('data-split-text', type);
  
  // Create split with minimal options
  const split = new SplitText(element, { 
    type,
    reduceWhiteSpace: false // Preserve original spacing
  });

  // Store reference
  activeSplits.set(element, split);
  splitElements.push({ element, split });
  
  return split;
}

/**
 * Animate words with scroll trigger
 */
function animateWords(element, direction = "up") {
  const split = createSplit(element, "words");
  if (!split?.words?.length) return null;

  const yStart = direction === "down" ? 100 : -100;

  element.setAttribute('data-reveal-direction', direction);

  const tween = gsap.fromTo(
    split.words,
    { 
      yPercent: yStart,
      opacity: 0,
      willChange: 'transform, opacity'
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: { amount: 0.3, ease: "power2.inOut" },
      ease: "power2.out",
      clearProps: "willChange",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  if (tween.scrollTrigger) {
    scrollTriggers.push(tween.scrollTrigger);
  }

  return tween;
}

/**
 * Animate lines (for body text)
 */
function animateLines(element) {
  const split = createSplit(element, "lines");
  if (!split?.lines?.length) return null;

  element.setAttribute('data-reveal-type', 'lines');

  const tween = gsap.fromTo(
    split.lines,
    { 
      yPercent: 110,
      opacity: 0,
      willChange: 'transform, opacity'
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
      stagger: { amount: 0.4, ease: "power1.inOut" },
      ease: "power3.out",
      clearProps: "willChange",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none reverse"
      }
    }
  );

  if (tween.scrollTrigger) {
    scrollTriggers.push(tween.scrollTrigger);
  }

  return tween;
}

/**
 * Immediate reveal for page transitions (no scroll trigger)
 */
async function animateRevealEnter(container) {
  if (!container) return;

  const headers = container.querySelectorAll(".text-reveal-header:not(.has-3d-text)");
  if (!headers.length) return;

  const animations = [];

  for (const header of headers) {
    const split = createSplit(header, "words");
    if (!split?.words?.length) continue;

    const isReverse = header.classList.contains('text-reveal-reverse');
    const yStart = isReverse ? 100 : -100;

    header.setAttribute('data-reveal-direction', isReverse ? 'down' : 'up');

    const tween = gsap.fromTo(
      split.words,
      { 
        yPercent: yStart,
        opacity: 0,
        willChange: 'transform, opacity'
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: { amount: 0.25, ease: "power2.inOut" },
        ease: "power2.out",
        clearProps: "willChange"
      }
    );

    if (tween) {
      animations.push(tweenToPromise(tween));
    }
  }

  if (animations.length) {
    await Promise.all(animations);
  }
}

/**
 * Initialize all scroll-triggered text reveals
 */
function initScrollTextReveals() {
  // Kill existing triggers
  cleanupScrollTriggers();

  // Query all reveal elements (exclude hero sections which use enter animations)
  const selectors = {
    words: [
      ".text-reveal:not(.hero .text-reveal)",
      ".text-reveal-reverse:not(.hero .text-reveal-reverse)",
      ".text-reveal-header:not(.hero .text-reveal-header):not(.contact-contain .text-reveal-header)"
    ],
    lines: [
      ".body-text-reveal:not(.hero .body-text-reveal):not(.hero-text-reveal)"
    ]
  };

  // Animate word-based reveals
  const wordElements = document.querySelectorAll(selectors.words.join(", "));
  for (const el of wordElements) {
    const direction = el.classList.contains('text-reveal-reverse') ? 'down' : 'up';
    animateWords(el, direction);
  }

  // Animate line-based reveals
  const lineElements = document.querySelectorAll(selectors.lines.join(", "));
  for (const el of lineElements) {
    animateLines(el);
  }
}

/**
 * Kill all scroll triggers
 */
function cleanupScrollTriggers() {
  while (scrollTriggers.length) {
    const trigger = scrollTriggers.pop();
    if (trigger && !trigger.isReverted) {
      trigger.kill();
    }
  }
}

/**
 * Revert all text splits and clean up DOM
 */
function cleanupSplits() {
  // Kill any active tweens on split elements
  for (const { element, split } of splitElements) {
    if (split) {
      gsap.killTweensOf([split.words, split.lines, split.chars].filter(Boolean));
      
      // Revert split (restores original DOM)
      if (typeof split.revert === 'function') {
        split.revert();
      }
    }
    
    // Clean up data attributes
    if (element) {
      element.removeAttribute('data-split-text');
      element.removeAttribute('data-reveal-direction');
      element.removeAttribute('data-reveal-type');
      
      // Clear any inline styles GSAP might have left
      gsap.set(element, { clearProps: "all" });
    }
  }
  
  // Clear tracking arrays
  splitElements.length = 0;
}

export {
  createSplit,
  animateRevealEnter,
  initScrollTextReveals,
  cleanupScrollTriggers,
  cleanupSplits
};
