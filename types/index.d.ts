/**
 * Skip link component.
 * @param {Record<string, any>} props
 * @param {string} props.href
 * @param {string} props.linkText
 * @param {string} [props.id=skip]
 * @param {string} [props.className=skip-link]
 * @param {...HTMLAttributes<'a'>} [props.attrs]
 * @returns {SkipLink}
 */
type SkipLink = typeof import('../index.js').SkipLink;
export const SkipLink: SkipLink;
