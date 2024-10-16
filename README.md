# Astro Components

A collection of accessible UI components for [Astro](https://astro.build).

## Usage

Import components from the package using named import syntax.

```jsx
---
import { ComponentOne, ComponentTwo } from '@moonjellydigital/astro-components';
---
```

### Overriding Styles

You can override a component's styles by using the `:global()` selector or a global
style tag. All styles are written in CSS.

```css
<style is:global>
  .component-class {
    color: var(--my-text-color);
  }
</style>
```

### Overriding Component Class Names

Components come with default class names, but you are free to supply your own.
Each component has a `className` prop that will set your name on the component's
outermost element and replace the block level portion of the class name on the
component's inner elements.

For example, the default class name of the SkipLink component is `.skip-link` and it
has a child element with the name `.skip-link__content`. If you supply the `className`
prop with `my-link`, the outer HTML element will have the class `.my-link` and the
inner element will have the class `.my-link__content`.

## Components

### SkipLink

SkipLink can be used to give users a way to skip past content that is repeated
on multiple pages. The provided styles are designed to be optimal for the most
common use case, a link at the top of the page that goes to the main content.
Some re-styling of the focus state may be required for [technique G123](https://www.w3.org/WAI/WCAG21/Techniques/general/G123), jumping
from the beginning to the end of a block of content, and [technique G124](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), adding
links at the top of the page to multiple content areas.

SkipLink does not load any JavaScript on the client.

You can add any HTML attributes supported by the `HTMLAttributes<'a'>` type
as props.

#### Basic Usage

```jsx
---
import { SkipLink } from '@moonjellydigital/astro-components';
---
<SkipLink href={"#main-content"} linkText={"Skip to main content"} />
```

#### Props

```typescript
interface Props extends HTMLAttributes<'a'> {
  /** Where to jump to on the page. */
  href: string;
  /** The link text the user will read. */
  linkText: string;
  /** HTML id of the anchor element. default: 'skip' */
  id?: string;
  /** HTML class of the anchor element. default: 'skip-link' */
  className?: string;
}
```

## License

[MIT](./LICENSE)
