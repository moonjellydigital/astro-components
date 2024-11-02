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

The interface for the CSS class system looks like this:

```typescript
interface HTMLClass {
  /** The CSS class namespace */
  className?: string;
  /** A list of CSS classes */
  classList?: string[];
}
```

Components' `data-ac-*` attributes are for JavaScript. All the included client-side
scripts use data attributes, so that changing the CSS class namespace doesn't break
them.

Each component has a `data-ac-type` attribute with a value that matches its component
name, even if it doesn't use any JavaScript. This makes it easier to debug in the
browser developer tools if you've overridden the CSS class namespace.

This package only uses the HTML id attribute to implement accessibility where required.

You can add any attributes to the outermost HTML element that are supported by that tag
type as props.

The following code provides a stripped down example of how components are structured:

```jsx
---
export interface Props extends HTMLClass, HTMLAttributes<'div'> {
  ownProp: string;
}

const { ownProp, className = 'example-component', classList = [], ...attrs } = Astro.props;
---

<div class:list={[className, classList]} data-ac-type="ExampleComponent" {...attrs}>
  <div class={`${className}__content`} data-ac-prop={ownProp}>
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

For example, the default class name of the `SkipLink` component is `.skip-link` and it
has a child element with the name `.skip-link__content`. If you supply the `className`
prop with `my-link`, the outer HTML element will have the class `.my-link` and the
inner element will have the class `.my-link__content`.

**Note:** Overriding the component's class name means the included styles won't be applied.

## Components

### `BackToTop`

`BackToTop` takes users back to the top of the page.

#### Basic Usage

```jsx
---
import { BackToTop } from '@moonjellydigital/astro-components';
---

<BackToTop>
  <div>
    <span aria-hidden="true" class="my-icon"><!-- icon stuff --></span>
    <span class="sr-only">Back to top of page</span>
  </div>
</BackToTop>
```

#### Props

```typescript
interface Props extends HTMLClass, HTMLAttributes<'a'> {
  /** Default slot */
  children: any;
  /** Id to scroll to. default: #top */
  href?: string;
  /** Number of viewport heights the user needs to scroll before the component is visible. default: 1.5 */
  scrollDepth?: number;
  /** Number of milliseconds to throttle the scroll handler function to. default: 100 */
  throttleInterval?: number;
}
```

### `DisclosureButton`

`DisclosureButton` can be used in components that implement the [disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).
The required attributes for a disclosure button are available as props. You can also
set any additional ARIA or button element attributes you might need.

`DisclosureButton` uses a native `<button>` element.

#### Basic Usage

```jsx
---
import { DisclosureButton } from '@moonjellydigital/astro-components';
---

<DisclosureButton ariaExpanded={'false'} ariaControls={'myAccordionPanel1'}>
  Accordion Panel 1
</DisclosureButton>
```

#### Props

```typescript
interface Props extends HTMLClass, HTMLAttributes<'button'> {
  /** The initial state of the expandable element this button controls. */
  ariaExpanded: 'true' | 'false';
  /** Default slot. */
  children: any;
  /** The `id` of the element the button controls. */
  ariaControls?: string | null;
}
```

### `Heading`

`Heading` is a polymorphic component that can render `h1` through `h6` elements. You can
use it inside other components to dynamically set the heading level for component
instances using prop threading. This makes your component more reusable, accessible, and
SEO-friendly.

`Heading` uses [Astro's dynamic tags](https://docs.astro.build/en/basics/astro-syntax/#dynamic-tags)
feature, so it can't be used with `client:*` hydration directives.

#### Basic Usage

```jsx
---
import { Heading } from '@moonjellydigital/astro-components';
---

<Heading Tag={'h2'}>My Heading</Heading>
```

#### Props

```typescript
interface Props
  extends HTMLClass,
    HTMLAttributes<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: any;
}
```

### `Icon`

`Icon` can be used to make icon components with your own SVGs or images. `Icon`
instances and their child elements are hidden from AT (accessibility technology)
by default, using `aria-hidden`. The `aria-hidden` attribute can be set to false
with the `ariaHidden` prop in the unlikely event you need to.

You can add any HTML attributes supported by the `span` tag as props.

#### Basic Usage

```jsx
---
import { Icon } from '@moonjellydigital/astro-components';
---

<Icon>
  <!-- Your SVG here -->
</Icon>
```

#### Props

```typescript
interface Props extends HTMLClass, HTMLAttributes<'span'> {
  /** Whether to hide the element and its children from AT. Default: 'true' */
  ariaHidden?: 'true' | 'false';
  /** Default slot children. */
  children: any;
}
```

### `SkipLink`

`SkipLink` can be used to give users a way to skip past content that is repeated
on multiple pages. The provided styles are designed to be optimal for the most
common use case, a link at the top of the page that goes to the main content.
Some re-styling of the focus state may be required for [technique G123](https://www.w3.org/WAI/WCAG21/Techniques/general/G123), jumping
from the beginning to the end of a block of content, and [technique G124](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), adding
links at the top of the page to multiple content areas.

`SkipLink` does not load any JavaScript on the client.

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
interface Props extends HTMLClass, HTMLAttributes<'a'> {
  /** Where to jump to on the page. */
  href: string;
  /** The link text the user will read. */
  linkText: string;
}
```

### `StateLayer`

`StateLayer` is a polymorphic component that can render as either a `div` or a `span`.
You can use it in designs that call for a visual indicator of state in interactive
components like buttons and menu items. Using `StateLayer` instead of a bare `div`
or `span` tag provides better semantics for developers and can help keep state layer
styling more consistent across components.

`StateLayer` uses [Astro's dynamic tags](https://docs.astro.build/en/basics/astro-syntax/#dynamic-tags)
feature, so it can't be used with `client:*` hydration directives.

#### Basic Usage

```jsx
---
import { StateLayer } from '@moonjellydigital/astro-components';
---

<StateLayer Tag={'span'} />
```

#### Props

```typescript
interface Props extends HTMLClass, HTMLAttributes<'div' | 'span'> {
  /** Which HTML tag to render. */
  Tag: 'div' | 'span';
}
```

### `ToggleButton`

`ToggleButton` can be used in components that require a toggle button, like a
dark mode or mute button. The necessary attributes for a toggle button are
available as props. You can also set any additional ARIA or button element
attributes you might need.

`ToggleButton` uses a native `<button>` element.

#### Basic Usage

```jsx
---
import { ToggleButton } from '@moonjellydigital/astro-components';
---

<ToggleButton ariaPressed={'false'}>
  Dark Mode
</DisclosureButton>
```

#### Props

```typescript
interface Props extends HTMLClass, HTMLAttributes<'button'> {
  /** The initial state of the expandable element this button controls. */
  ariaPressed: 'true' | 'false' | 'mixed';
  /** Default slot. */
  children: any;
}
```

## License

[MIT](./LICENSE)
