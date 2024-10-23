import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { StateLayer } from '..';

describe('StateLayer', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(StateLayer, {
      props: {
        Tag: 'div',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('implements HTMLAttributes<"div | span"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(StateLayer, {
      props: {
        Tag: 'div',
        id: 'test-id',
      },
    });
    expect(result).toContain('id="test-id"');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(StateLayer, {
      props: {
        Tag: 'div',
      },
    });
    expect(result).toContain('data-ac-type="StateLayer"');
  });

  test('renders as a div', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(StateLayer, {
      props: {
        Tag: 'div',
      },
    });
    expect(result).toContain('</div>');
  });

  test('renders as a span', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(StateLayer, {
      props: {
        Tag: 'span',
      },
    });
    expect(result).toContain('</span>');
  });
});
