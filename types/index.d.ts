export interface HTMLClass {
  /** The CSS class namespace */
  className?: string;
  /** A list of CSS class names */
  classList?: string[];
}

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type NonSemanticTag = 'div' | 'span';

/**
 * Back to top component.
 * @param {Record<string, any>} props
 * @param {any} props.children Default slot children.
 * @param {string} [props.href=#top] The id to scroll to.
 * @param {number} [props.scrollDepth=1.5] Number of viewport heights from top of page before component is visible.
 * @param {number} [props.throttleInterval=100] The scroll handler throttle interval in milliseconds.
 * @param {HTMLClass.className} [props.className=back-to-top]
 * @param {HTMLClass.classList} [props.classList=[]]
 * @param {...HTMLAttributes<'a'>} [props.attrs]
 */
type BackToTop = typeof import('../index.js').BackToTop;
export const BackToTop: BackToTop;

/**
 * Disclosure pattern button component.
 * @param {Record<string, any>} props
 * @param {string} props.ariaExpanded The aria-expanded state to initialize with. Can be 'true' or 'false'.
 * @param {any} props.children Default slot children.
 * @param {string | null} [props.ariaControls=null]
 * @param {HTMLClass.className} [props.className=disclosure-button]
 * @param {HTMLClass.classList} [props.classList=[]]
 * @param {...HTMLAttributes<'button'>} [props.attrs]
 */
type DisclosureButton = typeof import('../index.js').DisclosureButton;
export const DisclosureButton: DisclosureButton;

/**
 * Heading (h1 - h6) component.
 * @param {Record<string, any>} props
 * @param {HeadingTag} props.Tag The heading tag to render. Can be one of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'.
 * @param {any} props.children Default slot children.
 * @param {HTMLClass.className} [props.className=heading]
 * @param {HTMLClass.classList} [props.classList=[]]
 * @param {...HTMLAttributes<HeadingTag>} [props.attrs]
 * @returns {Heading}
 */
type Heading = typeof import('../index.js').Heading;
export const Heading: Heading;

/**
 * Skip link component.
 * @param {Record<string, any>} props
 * @param {string} props.href
 * @param {string} props.linkText
 * @param {string} [props.className=skip-link]
 * @param {string[]} [props.classList=[]]
 * @param {...HTMLAttributes<'a'>} [props.attrs]
 * @returns {SkipLink}
 */
type SkipLink = typeof import('../index.js').SkipLink;
export const SkipLink: SkipLink;

/**
 * State layer component.
 * @param {Record<string, any>} props
 * @param {NonSemanticTag} props.Tag The HTML tag to render. Can be one of 'div' or 'span'.
 * @param {HTMLClass.className} [props.className=state-layer]
 * @param {HTMLClass.classList} [props.classList=[]]
 * @param {...HTMLAttributes<NonSemanticTag>} [props.attrs]
 * @returns {StateLayer}
 */
type StateLayer = typeof import('../index.js').StateLayer;
export const StateLayer: StateLayer;

/**
 * Toggle pattern button component.
 * @param {Record<string, any>} props
 * @param {string} props.ariaPressed The aria-pressed state to initialize with. Can be 'true', 'false', or 'mixed'.
 * @param {any} props.children Default slot children.
 * @param {HTMLClass.className} [props.className=toggle-button]
 * @param {HTMLClass.classList} [props.classList=[]]
 * @param {...HTMLAttributes<'button'>} [props.attrs]
 */
type ToggleButton = typeof import('../index.js').ToggleButton;
export const ToggleButton: ToggleButton;
