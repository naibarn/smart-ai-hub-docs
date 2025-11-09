import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Smart AI Hub Documentation',
  tagline: 'AI-Powered Workflow Automation Platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://naibarn.github.io',
  baseUrl: '/smart-ai-hub-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'naibarn',
  projectName: 'smart-ai-hub-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/naibarn/smart-ai-hub-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/smart-ai-hub-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Smart AI Hub',
      logo: {
        alt: 'Smart AI Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/naibarn/Smart-AI-Hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Agents',
              to: '/agents',
            },
            {
              label: 'API Reference',
              to: '/gateway',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/naibarn/Smart-AI-Hub',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/smart-ai-hub',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'FAQ',
              to: '/faq',
            },
            {
              label: 'Support',
              href: 'mailto:support@smart-ai-hub.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/naibarn/Smart-AI-Hub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smart AI Hub. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
