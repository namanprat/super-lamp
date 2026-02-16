import barba from '@barba/core';
import gsap from 'gsap';
import { initMenu } from './menu.js';
import { preloader } from './preloader.js';

import { initWork, destroyWork } from './work.js';
import { initArchive, destroyArchive } from './archive.js';
import { initFilm, destroyFilm } from './project-canvas.js';
import { initScrollTextReveals, cleanupScrollTriggers, cleanupSplits, animateRevealEnter } from './text-reveal.js';
import webgl, {
  destroyWebgl,
  setScenePage,
  isWebglRunning,
  swapModel,
  closeMenuIfOpen,
} from './three.js';
import { animateTransition, revealTransition, destroyTransition } from './transition.js';
import { initLinkHover } from './link-hover.js';
import { initBtnHover, destroyBtnHover } from './btn-hover.js';


function tweenToPromise(tween) {
  return tween
    ? new Promise(resolve => tween.eventCallback('onComplete', resolve))
    : Promise.resolve();
}

function createHomeLeaveTimeline() {
  // Home hero text is rendered by Troika on the WebGL canvas — no DOM animations needed
  return null;
}

function createContactLeaveTimeline(container, nextNamespace) {
  // Contact text is rendered by Troika on the WebGL canvas — only animate link-main
  const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });
  let hasSteps = false;

  const linkMain = document.querySelector('.link-main');
  if (linkMain) {
    hasSteps = true;
    tl.to(linkMain, {
      y: -20,
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        if (nextNamespace === 'home') {
          gsap.set(linkMain, { autoAlpha: 0, clearProps: 'transform,opacity' });
        }
      }
    }, 0);
  }

  return hasSteps ? tl : null;
}

function primeHomeEnter() {
  // Home hero text is rendered by Troika — only set link-main state
  const linkMain = document.querySelector('.link-main');
  if (linkMain) {
    gsap.set(linkMain, { autoAlpha: 0 });
  }
}

function primeContactEnter() {
  const linkMain = document.querySelector('.link-main');
  if (linkMain) {
    gsap.set(linkMain, { autoAlpha: 1, y: 20, opacity: 0 });
  }
}

function createHomeEnterTimeline() {
  // Home hero text is rendered by Troika on the WebGL canvas — no DOM animations needed
  return null;
}

function createContactEnterTween() {
  const linkMain = document.querySelector('.link-main');
  if (!linkMain) return null;
  return gsap.to(linkMain, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out'
  });
}


// Update time display
let cachedTimeElement = null;
const IST_TIME_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
});

function updateTime() {
  if (!cachedTimeElement) {
    cachedTimeElement = document.getElementById('time');
  }
  if (cachedTimeElement) {
    cachedTimeElement.textContent = `${IST_TIME_FORMATTER.format(new Date())} IST`;
  }
}

// Initialize time updates
function initTime() {
  cachedTimeElement = null; // Reset cache for new page
  updateTime();
  if (window.timeInterval) {
    clearInterval(window.timeInterval);
  }
  window.timeInterval = setInterval(updateTime, 1000);
}

// Helper: determine if a namespace uses the shared WebGL canvas
function isWebglPage(ns) {
  return ns === 'home' || ns === 'contact' || ns === 'work';
}

function initPageFeatures(namespace, { skipWebglSetup = false } = {}) {
  initTime();
  // Menu and link hover target persistent nav elements — only init once
  initMenu();
  initScrollTextReveals();
  initLinkHover();
  // Btn hover needs rebuild since buttons may be in page content
  destroyBtnHover();
  initBtnHover();

  const ns = namespace || document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace;
  const linkMain = document.querySelector('.link-main');
  if (linkMain) {
    gsap.set(linkMain, { autoAlpha: ns === 'home' ? 0 : 1 });
    if (ns !== 'home' && ns !== 'contact') {
      gsap.set(linkMain, { clearProps: 'transform,opacity' });
    }
  }

  // WebGL setup already handled by transition leave/enter hooks
  if (skipWebglSetup) {
    if (ns === 'archive') {
      destroyWork();
      destroyTransition();
      destroyWebgl();
      initArchive();
    } else {
      destroyArchive();
      if (ns === 'work') {
        // initWork() already called in enter() hook — skip to avoid double-init
      } else if (ns === 'home' || ns === 'contact') {
        // requestAnimationFrame(() => {
        //   requestAnimationFrame(() => mountSceneText(ns));
        // });
      }
    }
    return;
  }

  if (ns === 'work') {
    destroyArchive();
    destroyFilm();
    webgl();
    setScenePage('work', true);
    swapModel('work');
    initWork();
  } else if (ns === 'archive') {
    destroyWork();
    destroyFilm();
    destroyTransition();
    destroyWebgl();
    initArchive();
  } else if (ns === 'film') {
    destroyArchive();
    destroyWork();
    destroyTransition();
    destroyWebgl();
    initFilm();
  } else if (ns === 'home' || ns === 'contact') {
    destroyArchive();
    destroyWork();
    destroyFilm();
    webgl();
    setScenePage(ns, true);
    swapModel('home');
    // requestAnimationFrame(() => {
    //   requestAnimationFrame(() => mountSceneText(ns));
    // });
    animateRevealEnter(document.querySelector('[data-barba="container"]'));
  } else {
    destroyArchive();
    destroyWork();
    destroyFilm();
    destroyTransition();
    destroyWebgl();
  }
}

barba.init({
  transitions: [
    {
      name: 'webgl-page-transition',
      from: { namespace: ['home', 'contact', 'work'] },
      to: { namespace: ['home', 'contact', 'work'] },
      async leave(data) {
        const fromNs = data?.current?.namespace;
        const toNs = data?.next?.namespace;
        const container = data?.current?.container;

        closeMenuIfOpen();

        const involvesWork = (fromNs === 'work' || toNs === 'work');

        if (involvesWork) {
          // ── Ink Dissolve for work ↔ home/contact ──

          // Destroy wheel if leaving work page
          if (fromNs === 'work') {
            destroyWork();
          }

          // Capture current frame and show ink dissolve overlay
          // await animateTransition();

          // Wait for overlay to fully cover screen before Barba swaps DOM
          // await new Promise(r => setTimeout(r, 400));

        } else {
          // ── home <-> contact: camera shift, no ink ──
          // await unmountSceneText();

          if (fromNs === 'home') {
            await tweenToPromise(createHomeLeaveTimeline(container));
          } else if (fromNs === 'contact') {
            await tweenToPromise(createContactLeaveTimeline(container, toNs));
          }
        }

        // Clean up AFTER leave animation so splits are still valid during animation
        cleanupScrollTriggers();
        cleanupSplits();
      },
      async enter(data) {
        const fromNs = data?.current?.namespace;
        const toNs = data?.next?.namespace;
        const container = data?.next?.container;

        const involvesWork = (fromNs === 'work' || toNs === 'work');

        if (involvesWork) {
          // Swap model + set camera for incoming page
          const targetModel = toNs === 'work' ? 'work' : 'home';
          swapModel(targetModel);
          setScenePage(toNs, true);

          // Init work page if arriving on work
          if (toNs === 'work') {
            initWork();
          }

          // Reveal the new page by dissolving away the ink overlay
          // revealTransition();
        } else {
          // home <-> contact: prime enter animations
          if (toNs === 'home') {
            primeHomeEnter();
            setScenePage('home');
          } else if (toNs === 'contact') {
            primeContactEnter();
            setScenePage('contact');
          }
          animateRevealEnter(container);
        }
      },
      async after(data) {
        const container = data?.next?.container;
        const ns = data?.next?.namespace;
        if (!container) return;

        // WebGL setup (model swap, camera, etc.) already handled in leave/enter
        initPageFeatures(ns, { skipWebglSetup: true });

        if (ns === 'home') {
          const linkMain = document.querySelector('.link-main');
          if (linkMain) {
            gsap.set(linkMain, { autoAlpha: 0 });
          }
        } else if (ns === 'contact') {
          await tweenToPromise(createContactEnterTween());
        }
      }
    },
    {
      name: 'default',
      async leave(data) {
        const fromNs = data?.current?.namespace;

        if (fromNs === 'work') {
          destroyWork();
        }
        if (fromNs === 'archive') {
          destroyArchive();
        }
        if (fromNs === 'film') {
          destroyFilm();
        }
        if (fromNs === 'home' || fromNs === 'contact') {
          // await unmountSceneText();
        }

        closeMenuIfOpen();

        // Destroy webgl when going to non-webgl pages
        if (isWebglPage(fromNs)) {
          destroyTransition();
          destroyWebgl();
        }

        cleanupScrollTriggers();
        cleanupSplits();
      },
      async enter() {
        // Simple page swap — no ink dissolve for non-webgl pages
      },
      async once(data) {
        const ns = data?.next?.namespace;

        // Non-webgl pages (archive, film, etc.) don't call webgl() so the
        // preloader never fires via loadModels(). Run it here instead.
        if (!isWebglPage(ns)) {
          await Promise.all([preloader.init(), preloader.load([])]);
        }

        initPageFeatures(ns);
        const container = data?.next?.container;
        if (!container) return;

        if (ns === 'home') {
          const linkMainHome = document.querySelector('.link-main');
          if (linkMainHome) {
            gsap.set(linkMainHome, { autoAlpha: 0 });
          }
          animateRevealEnter(container);
        } else if (ns === 'contact') {
          const linkMain = document.querySelector('.link-main');
          if (linkMain) {
            gsap.set(linkMain, { autoAlpha: 1, y: 20, opacity: 0 });
            await gsap.to(linkMain, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.2
            });
          }
          animateRevealEnter(container);
        }
      },
      async after(data) {
        const ns = data?.next?.namespace;
        if (ns) {
          initPageFeatures(ns);
        }

        if (ns === 'contact') {
          const linkMain = document.querySelector('.link-main');
          if (linkMain) {
            gsap.set(linkMain, { autoAlpha: 1, y: 20, opacity: 0 });
            await gsap.to(linkMain, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        }
      }
    }
  ]
});
