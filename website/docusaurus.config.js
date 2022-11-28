// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

var path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkCodeTerminal = require('./src/remark/code-terminal');
const remarkIncludeCode = require('./src/remark/include-code');
const remarkIncludeKustomization = require('./src/remark/include-kustomization');
const remarkBlueprintsAddon = require('./src/remark/blueprints-addon');

const rootDir = path.dirname(require.resolve('./package.json'));
const manifestsDir = `${rootDir}/../environment/workspace/modules`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CON 204: Getting started with Amazon EKS',
  tagline:
    'Learn the basics of Amazon Elastic Kubernetes Service',
  url: 'https://eksworkshop-v2-next.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  organizationName: 'aws-samples',
  projectName: 'eks-workshop-v2',

  plugins: ['docusaurus-plugin-sass'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkCodeTerminal],
          beforeDefaultRemarkPlugins: [
            [remarkIncludeCode, { manifestsDir }],
            [remarkIncludeKustomization, { manifestsDir }],
            //[remarkBlueprintsAddon, {terraformDir: `${rootDir}/../terraform/local`}]
          ],
          editUrl:
            'https://github.com/aws-samples/eks-workshop-v2/tree/main/website',
          exclude: ['**/Amazon-Guardduty-for-EKS-V2/**'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'EKS Workshop (re:Invent)',
        logo: {
          alt: 'Amazon Web Services',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/index',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'fundamentals/index',
            position: 'left',
            label: 'Fundamentals',
          },
          {
            type: 'doc',
            docId: 'autoscaling/index',
            position: 'left',
            label: 'Autoscaling',
          },
          {
            type: 'doc',
            docId: 'observability/index',
            position: 'left',
            label: 'Observability',
          },
          {
            type: 'doc',
            docId: 'security/index',
            position: 'left',
            label: 'Security',
          },
          {
            type: 'doc',
            docId: 'networking/index',
            position: 'left',
            label: 'Networking',
          },
          // {
          //   href: 'https://github.com/aws-samples/eks-workshop-v2',
          //   position: 'right',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          // },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 4,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        links: [
          {
            label: 'Site Terms',
            href: 'https://aws.amazon.com/terms/?nc1=f_pr',
          },
          {
            label: 'Privacy',
            href: 'https://aws.amazon.com/privacy/?nc1=f_pr',
          }
        ],
        copyright: `© ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-highlight',
            line: 'HIGHLIGHT',
          },
        ],
      },
    }),
};

module.exports = config;
