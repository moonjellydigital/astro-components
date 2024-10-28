import { throttle } from 'throttle-debounce';

/**
 * Client JS for BackToTop Astro component.
 *
 * Expects an HTML element with the following attributes:
 *
 * data-ac-type="BackToTop"
 * data-ac-throttle-intvl
 * data-ac-scroll-depth
 * data-ac-visible
 */
export class BackToTop {
  #button: HTMLElement | null;
  #throttleIntvl: number | string | undefined;
  #scrollDepth: number | string | undefined;
  #toggleHeight: number | undefined;
  #status: 'ok' | 'err' | undefined;
  #errs: Error[];

  constructor() {
    this.#button = null;
    this.#throttleIntvl = undefined;
    this.#scrollDepth = undefined;
    this.#toggleHeight = undefined;
    this.#status = undefined;
    this.#errs = [];

    this.#setup();
  }

  #setup() {
    this.#button = document.querySelector(
      '[data-ac-type="BackToTop"]',
    ) as HTMLElement | null;

    if (!this.#button) {
      this.#status = 'err';
      this.#errs.push(
        new Error(
          'BackToTop setup failed: The element with selector [data-ac-type="BackToTop"] could not be found.',
        ),
      );
      this.#errs.forEach((err) => console.error(err));
    }

    if (this.#status !== 'err' && this.#button) {
      this.#throttleIntvl = this.#button.dataset?.acThrottleIntvl || 100;
      this.#scrollDepth = this.#button.dataset?.acScrollDepth || 1.5;
      this.#toggleHeight = window.innerHeight * Number(this.#scrollDepth);
      window.addEventListener('scroll', this.#toggleVisibility(), {
        passive: true,
      });
      this.#status = 'ok';
    }
  }

  #toggleVisibility() {
    return throttle(Number(this.#throttleIntvl), () => {
      if (this.#toggleHeight === undefined || !this.#button) {
        return;
      }

      if (window.scrollY >= this.#toggleHeight) {
        this.#button.dataset.acVisible = 'true';
      } else {
        this.#button.dataset.acVisible = 'false';
      }
    });
  }

  get button(): HTMLElement | null {
    return this.#button;
  }

  get throttleIntvl(): number | string | undefined {
    return this.#throttleIntvl;
  }

  get scrollDepth(): number | string | undefined {
    return this.#scrollDepth;
  }

  get toggleHeight(): number | undefined {
    return this.#toggleHeight;
  }

  get status(): string | undefined {
    return this.#status;
  }

  get errs(): Error[] {
    return this.#errs;
  }
}
