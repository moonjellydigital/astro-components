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
  test('renders all props that are not ...attrs', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
        id: 'test-id',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(result).toContain('href="#testing"');
    expect(result).toContain('Test text');
    expect(result).toContain('id="test-id"');
    expect(hasClassNamespace(result)).toBe(true);
    expect(result).toContain(`class="${classNamespace}__content"`);
    expect(result).toContain(`class="${classNamespace}__state"`);
    expect(hasClassList(result)).toBe(true);
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        href: '#testing',
        linkText: 'Test text',
      },
    });
    expect(result).toContain('id="skip"');
    expect(result).toContain('class="skip-link"');
    expect(result).toContain('class="skip-link__content"');
    expect(result).toContain('class="skip-link__state"');
  });

  test('renders HTMLAttributes<"a"> attributes if caller provides them', async () => {
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
});
