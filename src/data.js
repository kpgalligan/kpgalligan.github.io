import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'kgalligan.com', href: 'https://kgalligan.com' }
  ],
};
  
export const footerData = {
  links: [
    
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kgalligan' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/kpgalligan/' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/kpgalligan' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/kpgalligan' },
    { ariaLabel: 'Github', icon: 'mdi:mastodon', href: 'https://mastodon.social/@kpgalligan' },
  ],
  footNote: `
    <a class="text-blue-600 hover:underline dark:text-neutral-200" href="https://kgalligan.com/">©2023 Kevin Galligan</a>
  `,
};
