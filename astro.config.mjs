// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://Edu2610.github.io',
    markdown: {
    // 2. Agregamos remark-math (para entender la sintaxis $...$)
    remarkPlugins: [remarkMath],
    // 3. Agregamos rehype-katex (para convertirlo a HTML visual)
    rehypePlugins: [rehypeKatex],
  },
});
