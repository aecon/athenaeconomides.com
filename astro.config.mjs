import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://aecon.github.io',
  base: '/athenaeconomides.com',
  integrations: [mdx(), sitemap(), tailwind()]
});
// export default defineConfig({
//   site: 'https://athenaeconomides.com',
//   integrations: [mdx(), sitemap(), tailwind()]
// });
