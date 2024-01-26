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
        title: 'SpecuX - Documentation Guide',
        description:
          'SpecuX aim to highlight the value of prediction markets, especially when mainstream media conceals crucial information.',
        // images : []
      },
    };
  },
  // head: (
  //   <>
  //     <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  //     <meta property='og:title' content='Nextra' />
  //     <meta property='og:description' content='The next site builder' />
  //   </>
  // ),
};

export default config;
