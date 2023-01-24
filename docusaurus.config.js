/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LawPro',
  tagline: 'The Law Agency',
  url: 'https://lawpro.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MultiSeven-HQ', // Usually your GitHub org/user name.
  projectName: 'MultiSeven-Site', // Usually your repo name.

  scripts: [
    'https://kit.fontawesome.com/307bcbc229.js',
    {
      src: 'https://cse.google.com/cse.js?cx=06b829f8aeeb1a6e6',
      async: true,
    },
    {
      src: '"https://my.setmore.com/webapp/js/src/others/setmore_iframe.js',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MultiSeven-HQ/MultiSeven-Site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MultiSeven-HQ/MultiSeven-Site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LawPro',

        items: [
          {to: '/pricings', label: 'Pricings', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {
            href: 'https://lawpro.in/sikkakimaya',
            label: 'Sikka Kimaya',
            position: 'left
          },
          {
            href: 'https://lawpro.in/stcalculation',
            label: 'Doon Square',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'DreamX Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/multiseven-logo.png',
        },
        copyright: `Copyright © ${new Date().getFullYear()} LawPro. All Rights Reserved.`,
      },
    }),
};

module.exports = config;
