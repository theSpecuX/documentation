import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>SpecuX</span>,
  project: {
    link: 'https://github.com/thespecux/documentation',
  },
  chat: {
    link: 'https://discord.gg/6w7SyZAVGe',
  },
  docsRepositoryBase: 'https://github.com/thespecux/documentation',
  footer: {
    text: 'SpecuX - Controversial News Prediction Platform',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SWR',
      title: 'SpecuX - Documentation Guide',
      description:
        'SpecuX aim to highlight the value of prediction markets, especially when mainstream media conceals crucial information.',
      openGraph: {
        url: 'https://docs.specux.com/',
        title:
          'SpecuX - Controversial News Prediction Platform Documentation Guide',
        description:
          'SpecuX aim to highlight the value of prediction markets, especially when mainstream media conceals crucial information.',
        images: [
          {
            url: 'https://specux.com/opengraph-image.png',
            width: 4000,
            height: 4000,
            alt: 'SpecuX.com website image',
            type: 'image/png',
          },
        ],
        siteName: 'SpecuX',
      },
      twitter: {
        handle: '@specuxHQ',
        cardType: 'summary_large_image',
      },
    };
  },
  head: (
    <>
      <link
        rel='icon'
        href='https://specux.com/favicon.ico'
        type='image/x-icon'
        sizes='16x16'
      />

      {/* Twitter Metatags */}
      <meta
        name='twitter:title'
        content='SpecuX - Controversial News Prediction Platform Documentation Guide'
      />
      <meta
        name='twitter:description'
        content='SpecuX aim to highlight the value of prediction markets, especially when mainstream media conceals crucial information.'
      />
      <meta name='twitter:image:type' content='image/png' />
      <meta name='twitter:image:width' content='4000' />
      <meta name='twitter:image:height' content='4000' />
      <meta name='twitter:image:alt' content='SpecuX.com website image' />
      <meta
        name='twitter:image'
        content='https://specux.com/twitter-image.png'
      />
    </>
  ),
};

export default config;
