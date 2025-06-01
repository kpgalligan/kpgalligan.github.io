import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Kevin Galligan',
  description:
    'Kevin Galligan. Tech Person.',
  href: 'https://kgalligan.com',
  author: 'kpgalligan',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/kpgalligan/',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/kpgalligan/',
    label: 'GitHub',
  },
  {
    href: 'https://bsky.app/profile/kpgalligan.bsky.social',
    label: 'Bluesky',
  },
  {
    href: 'mailto:kgalligan@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Bluesky: 'tabler:brand-bluesky',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
