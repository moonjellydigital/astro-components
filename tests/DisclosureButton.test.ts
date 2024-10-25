import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { DisclosureButton } from '..';

describe('DisclosureButton', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(DisclosureButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaExpanded: 'false',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('implements HTMLAttributes<"button"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(DisclosureButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaExpanded: 'true',
        disabled: true,
      },
    });
    expect(result).toContain(' disabled ');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(DisclosureButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaExpanded: 'false',
      },
    });
    expect(result).toContain('data-ac-type="DisclosureButton"');
  });

  test('renders all own props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(DisclosureButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaExpanded: 'false',
        ariaControls: 'testingId',
      },
    });
    expect(result).toContain('aria-expanded="false"');
    expect(result).toContain('aria-controls="testingId"');
    expect(result).toContain('Test text');
  });

  test('renders default values if none are provided', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(DisclosureButton, {
      slots: {
        default: 'Test text',
      },
      props: {
        ariaExpanded: 'true',
      },
    });
    expect(result).toContain('class="disclosure-button"');
    expect(result).not.toContain('aria-controls="');
  });
});
