import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  redirects: {
    '/my-account/my-bookings': '/nl/my-account/bookings',
    '/my-account/my-bookings/[hash]': '/nl/my-account/bookings/[hash]',
    '/my-account/my-profile': '/nl/my-account/profile',
    '/en/my-account/my-bookings': '/my-account/bookings',
    '/en/my-account/my-bookings/[hash]': '/my-account/bookings/[hash]',
    '/en/my-account/my-profile': '/my-account/profile',
  },
});
