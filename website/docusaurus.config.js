// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./intellijstyle.js');
const touchlabConfig = require('./touchlabconfig.js');

const gtagPlugin = [
  '@docusaurus/plugin-google-gtag',
  {
    trackingID: touchlabConfig.extraConfig.trackingID,
    anonymizeIP: true,
  },
]

const tailwindPlugin = async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss-omg",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    }

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: touchlabConfig.docusaurusConfig.projectName,
  tagline: touchlabConfig.docusaurusConfig.tagline,
  url: touchlabConfig.docusaurusConfig.url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'touchlab', // Usually your GitHub org/user name.
  projectName: touchlabConfig.docusaurusConfig.projectName, // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: ['@docusaurus/plugin-content-tldocs'],

  plugins: touchlabConfig.extraConfig.trackingID ? [
    gtagPlugin,
    tailwindPlugin
  ] : [tailwindPlugin],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${touchlabConfig.docusaurusConfig.organizationName}/${touchlabConfig.docusaurusConfig.projectName}/tree/main/website/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              `https://github.com/${touchlabConfig.docusaurusConfig.organizationName}/${touchlabConfig.docusaurusConfig.projectName}/tree/main/website/`,
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
        // docs: {
        //   sidebar: {
        //     hideable: true,
        //   },
        // },
        colorMode: {
          defaultMode: 'dark',
        },
        metadata: [{name: 'robots', content: 'noindex,follow'}],
        navbar: {
        title: touchlabConfig.docusaurusConfig.title,
          // style: 'dark',
          logo: {
            alt: 'Touchlab Logo',
            src: 'img/Touchlab_Gradient.png',
          },
          items: [

            {
              href: 'https://touchlab.co/',
              label: 'Touchlab Site',
              position: 'right',
            },

          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Kevin Galligan',
              items: [
                {
                  label: 'Website',
                  href: 'https://kgalligan.com/',
                },
                {
                  label: 'Touchlab',
                  href: `https://touchlab.co/`,
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/kpgalligan',
                },
              ],
            },

          ],
          copyright: `Copyright © ${new Date().getFullYear()} Kevin Galligan`,
        },
        prism: {
          // theme: require('./src/utils/DarkTheme').theme,
          theme: lightCodeTheme,//require('prism-react-renderer/themes/nightOwl'),
          darkTheme: darkCodeTheme,
          additionalLanguages: ['kotlin', 'java', 'ruby', 'swift', 'toml'],
        },
      }),
};

module.exports = {
  ...config,
  ...touchlabConfig.docusaurusConfig
};