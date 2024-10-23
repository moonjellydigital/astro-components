import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect } from 'vitest';
import {
  classList,
  hasClassList,
  classNamespace,
  hasClassNamespace,
} from './fixtures';
import { Heading } from '..';

describe('Heading', () => {
  test('implements HTMLClass interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h1',
        className: classNamespace,
        classList: classList,
      },
    });
    expect(hasClassNamespace(result)).toBe(true);
    expect(hasClassList(result)).toBe(true);
  });

  test('implements HTMLAttributes<"h1 - h6"> interface', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h1',
        id: 'test-id',
      },
    });
    expect(result).toContain('id="test-id"');
  });

  test('renders its data type', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h1',
      },
    });
    expect(result).toContain('data-ac-type="Heading"');
  });

  test('has a default slot for heading content', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h1',
      },
    });
    expect(result).toContain('>Test text<');
  });

  test('renders as an h1 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h1',
      },
    });
    expect(result).toContain('<h1 ');
  });

  test('renders as an h2 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h2',
      },
    });
    expect(result).toContain('<h2 ');
  });

  test('renders as an h3 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h3',
      },
    });
    expect(result).toContain('<h3 ');
  });

  test('renders as an h4 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h4',
      },
    });
    expect(result).toContain('<h4 ');
  });

  test('renders as an h5 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h5',
      },
    });
    expect(result).toContain('<h5 ');
  });

  test('renders as an h6 tag', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Heading, {
      slots: {
        default: 'Test text',
      },
      props: {
        Tag: 'h6',
      },
    });
    expect(result).toContain('<h6 ');
  });
});
