import gsap from 'gsap';
import { GLTFLoader } from 'three-stdlib';
import * as THREE from 'three';

export class Preloader {
    constructor() {
        this.container = document.querySelector('.preloader');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressIndicator = document.querySelector('.progress-bar-indicator');
        this.progressText = document.querySelector('.progress-bar-copy span');
        this.preloaderBlocks = document.querySelectorAll('.preloader-block');

        this.loadingManager = new THREE.LoadingManager();
        this.gltfLoader = new GLTFLoader(this.loadingManager);

        this.assetsLoaded = false;
        this.animationComplete = false;
        this.progress = 0;

        // Bind methods
        this.init = this.init.bind(this);
        this.load = this.load.bind(this);
    }

    init() {
        const hasSeenPreloader = sessionStorage.getItem('preloaderSeen') === 'true';

        if (!this.container) return;

        if (hasSeenPreloader) {
            this.container.style.display = 'none';
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            this.onCompleteCallback = resolve;
            this.startSequence();
        });
    }

    async load(urls) {
        if (!urls || urls.length === 0) {
            this.assetsLoaded = true;
            this.checkCompletion();
            return;
        }

        const promises = urls.map(url => {
            return new Promise((resolve, reject) => {
                this.gltfLoader.load(url, resolve, undefined, reject);
            });
        });

        try {
            await Promise.all(promises);
            this.assetsLoaded = true;
            this.checkCompletion();
        } catch (error) {
            console.error('Error loading assets:', error);
            // Even if error, we should probably proceed to show the site
            this.assetsLoaded = true;
            this.checkCompletion();
        }
    }

    startSequence() {
        if (!this.progressIndicator || !this.progressText || !this.progressBar) return;

        gsap.to(this.progressBar, {
            opacity: 1,
            duration: 0.075,
            ease: 'power2.inOut',
            delay: 0.5,
            repeat: 1,
            yoyo: true,
            onComplete: () => {
                gsap.set(this.progressBar, { opacity: 1 });
                this.startIncrements();
            },
        });
    }

    startIncrements() {
        let currentProgress = 0;
        const totalSteps = 5;
        let stepCount = 0;
        const increments = this.generateRandomIncrements(totalSteps);

        const animateNextStep = () => {
            // If we are at the last step but assets aren't loaded yet, wait
            if (stepCount >= totalSteps) {
                this.animationComplete = true;
                this.checkCompletion();
                return;
            }

            const increment = increments[stepCount];
            // Cap at 99% until assets are actually loaded? 
            // User's code goes to 100. Let's stick to user's logic but maybe pause at 99 if needed.
            // For now, let's just run the animation. 
            // If animation finishes before assets, it will sit at 100% until assetsLoaded is true.

            const targetProgress = Math.min(currentProgress + increment, 100);
            const randomDelay = 200 + Math.random() * 400;

            setTimeout(() => {
                gsap.to(this.progressIndicator, {
                    '--progress': targetProgress / 100,
                    duration: 0.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        // Update text
                        const val = Math.round(gsap.getProperty(this.progressIndicator, '--progress') * 100);
                        if (this.progressText) this.progressText.textContent = `${val}%`;
                    },
                    onComplete: () => {
                        currentProgress = targetProgress;
                        stepCount++;
                        animateNextStep();
                    },
                });
            }, randomDelay);
        };

        animateNextStep();
    }

    generateRandomIncrements(totalSteps) {
        const increments = [];
        let remaining = 100;
        const maxSingleIncrement = 30;

        for (let i = 0; i < totalSteps - 1; i++) {
            const maxIncrement = Math.min(
                maxSingleIncrement,
                remaining - (totalSteps - 1 - i),
            );
            const minIncrement = Math.max(
                5,
                Math.floor((remaining / (totalSteps - i)) * 0.5),
            );
            const increment =
                Math.floor(Math.random() * (maxIncrement - minIncrement)) + minIncrement;
            increments.push(increment);
            remaining -= increment;
        }

        increments.push(remaining);
        return increments.sort(() => Math.random() - 0.5);
    }

    checkCompletion() {
        if (this.assetsLoaded && this.animationComplete) {
            this.complete();
        }
    }

    complete() {
        if (!this.container) return;

        sessionStorage.setItem('preloaderSeen', 'true');

        gsap.to(this.progressBar, {
            opacity: 0,
            duration: 0.075,
            ease: 'power2.inOut',
            delay: 0.3,
            repeat: 1,
            yoyo: true,
            onComplete: () => {
                gsap.set(this.progressBar, { opacity: 0 });

                setTimeout(() => {
                    // If no blocks found (e.g. user didn't add them), just hide container
                    if (!this.preloaderBlocks || this.preloaderBlocks.length === 0) {
                        this.container.style.display = 'none';
                        if (this.onCompleteCallback) this.onCompleteCallback();
                        return;
                    }

                    const shuffledBlocks = [...this.preloaderBlocks].sort(
                        () => Math.random() - 0.5,
                    );

                    shuffledBlocks.forEach((block, index) => {
                        gsap.to(block, {
                            opacity: 0,
                            duration: 0.075,
                            ease: 'power2.inOut',
                            delay: index * 0.025,
                            repeat: 1,
                            yoyo: true,
                            onComplete: () => {
                                gsap.set(block, { opacity: 0 });
                                if (index === shuffledBlocks.length - 1) {
                                    this.container.style.display = 'none';
                                    if (this.onCompleteCallback) this.onCompleteCallback();
                                }
                            },
                        });
                    });
                }, 200);
            },
        });
    }
}

export const preloader = new Preloader();
