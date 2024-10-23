import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { SkipLink } from '..';

describe('SkipLink', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(result).toContain(`class="${classNamespace}__content"`);
    expect(result).toContain(`class="${classNamespace}__state"`);
    expect(hasClassList(result)).toBe(true);
  });

  test('renders all own props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
      },
    });
    expect(result).toContain('href="#testing"');
    expect(result).toContain('Test text');
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
      },
    });
    expect(result).toContain('class="skip-link"');
    expect(result).toContain('class="skip-link__content"');
    expect(result).toContain('class="skip-link__state"');
  });

  test('implements HTMLAttributes<"a"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
        target: '_blank',
      },
    });
    expect(result).toContain('target="_blank"');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
      },
    });
    expect(result).toContain('data-ac-type="SkipLink"');
  });
});
