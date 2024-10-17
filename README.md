# Astro Components

A collection of accessible UI components for [Astro](https://astro.build).

## Usage

Import components from the package using named import syntax.

```jsx
---
import { ComponentOne, ComponentTwo } from '@moonjellydigital/astro-components';
---
```

### Component Structure

The components in this package share some common properties and structure.

Each component has a CSS class name that serves as a **namespace**. The namespace
prevents styles from leaking into each other, since the included styles are global
so that you can override them. Child HTML elements have class names that start with
the component namespace, followed by two underscores and the element's name. The
naming convention in this package works the same way as BEM.

You can override the component namespace with your own by setting the `className`
prop. You can also add a list of your own CSS classes to the component's outermost
element by setting the `classList` prop. Note that if you override the namespace, the
included styles won't be applied.

The following code provides a stripped down example of how components are structured:

```jsx
---
export interface Props {
  className?: string;
  classList?: string[];
}

const { className = 'example-component', classList = [] } = Astro.props;
---

<div class:list={[className, classList]}>
  <div class={`${className}__content`}>
    <slot />
  </div>
</div>

<style is:global>
  .example-component {
    /* some CSS */
  }

  .example-component__content {
    /* some CSS */
  }
</style>
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

**Note:** Overriding the component's class name means the included styles won't be applied.

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
  /** Array of class names to add to the component. default: [] */
  classList?: string[];
}
```

## License

[MIT](./LICENSE)
