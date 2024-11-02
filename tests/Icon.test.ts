import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { Icon } from '..';

describe('Icon', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      slots: {
        default: `<svg viewBox="0 0 50 50" fill="grey"><circle cx="2" cy="2" r="2" /></svg>`,
      },
      props: {
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('implements HTMLAttributes<"span"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      slots: {
        default: 'Test text',
      },
      props: {
        id: 'test-id',
      },
    });
    expect(result).toContain('id="test-id"');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      slots: {
        default: 'Test text',
      },
    });
    expect(result).toContain('data-ac-type="Icon"');
  });

  test('renders all own props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaHidden: 'false',
      },
    });
    expect(result).toContain('aria-hidden="false"');
    expect(result).toContain('Test text');
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      slots: {
        default: 'Test text',
      },
    });
    expect(result).toContain('class="icon"');
    expect(result).toContain('aria-hidden="true"');
  });
});
