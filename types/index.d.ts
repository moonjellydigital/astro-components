export interface HTMLClass {
  /** The CSS class namespace */
  className?: string;
  /** A list of CSS class names */
  classList?: string[];
}

/**
 * Heading (h1 - h6) component.
 * @param {Record<string, any>} props
 * @param {string} props.Tag The heading tag to render. Can be one of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'.
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
