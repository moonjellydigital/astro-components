import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { BackToTop } from '..';

describe('BackToTop', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
      props: {
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('renders all own props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
      props: {
        href: '#testing',
        scrollDepth: 2,
        throttleInterval: 200,
      },
    });
    expect(result).toContain('href="#testing"');
    expect(result).toContain('data-ac-scroll-depth="2"');
    expect(result).toContain('data-ac-throttle-intvl="200"');
    expect(result).toContain('Test text');
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
    });
    expect(result).toContain('class="back-to-top"');
    expect(result).toContain('href="#top"');
    expect(result).toContain('data-ac-scroll-depth="1.5"');
    expect(result).toContain('data-ac-throttle-intvl="100"');
  });

  test('implements HTMLAttributes<"a"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
      props: {
        target: '_blank',
      },
    });
    expect(result).toContain('target="_blank"');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
    });
    expect(result).toContain('data-ac-type="BackToTop"');
  });

  test('visibility is initialized to correct value', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BackToTop, {
      slots: {
        default: 'Test text',
      },
    });
    expect(result).toContain('data-ac-visible="false"');
  });
});
