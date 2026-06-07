import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({

site:'https://unsol-pe.top',

trailingSlash:'always',

integrations:[sitemap()]

});
