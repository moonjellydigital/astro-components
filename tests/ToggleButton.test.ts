import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { ToggleButton } from '..';

describe('ToggleButton', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ToggleButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaPressed: 'false',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('implements HTMLAttributes<"button"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ToggleButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaPressed: 'true',
        disabled: true,
      },
    });
    expect(result).toContain(' disabled ');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ToggleButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaPressed: 'false',
      },
    });
    expect(result).toContain('data-ac-type="ToggleButton"');
  });

  test('renders all own props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ToggleButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaPressed: 'false',
      },
    });
    expect(result).toContain('aria-pressed="false"');
    expect(result).toContain('Test text');
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ToggleButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaPressed: 'true',
      },
    });
    expect(result).toContain('class="toggle-button"');
  });
});
