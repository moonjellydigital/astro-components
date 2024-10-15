import config from '@moonjellydigital/prettier-config' with { type: 'json' };

export default {
  ...config,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
