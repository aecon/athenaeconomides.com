import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://aecon.github.io',
  base: '/athenaeconomides.com',
  integrations: [mdx(), tailwind()]
});
// export default defineConfig({
//   site: 'https://athenaeconomides.com',
//   integrations: [mdx(), sitemap(), tailwind()]
// });
