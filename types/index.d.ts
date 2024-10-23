export interface HTMLClass {
  /** The CSS class namespace */
  className?: string;
  /** A list of CSS class names */
  classList?: string[];
}

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type NonSemanticTag = 'div' | 'span';

/**
 * Heading (h1 - h6) component.
 * @param {Record<string, any>} props
 * @param {HeadingTag} props.Tag The heading tag to render. Can be one of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'.
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
