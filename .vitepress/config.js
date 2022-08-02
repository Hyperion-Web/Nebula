const componentMenu = [
  {
    text: 'Guides',
    items: [
      { text: 'Quickstart Guide', link: '/guide/quickstart' },
      { text: 'Design System Methods', link: '/guide/designsys' },
      { text: 'CUBE', link: '/guide/cube' },
      { text: 'Intrinsic Design', link: '/guide/intrinsic' },
    ]
  },
  {
    text: 'Docs',
    items: [
      { text: 'Introduction', link: '/README' },
      { text: 'Usage', link: '/docs/usage' },
      { text: 'Styling', link: '/styles/' },
      { text: 'Atoms', link: '/atoms/' },
      { text: 'Molecules', link: '/molecules/' },
      { text: 'Compositions', link: '/compositions/'},
      { text: 'Layouts', link: '/layouts/' },
    ]
  },
  {
    text: "Atomic Components",
    collapsible: true,
    items: [
      { text: 'comp1', link: '/atoms/' },
      { text: 'comp 2', link: '/atoms/' },
      { text: 'comp 3', link: '/atoms/'},
      { text: 'comp 4', link: '/atoms/' },
    ]},
    {
      text: "Molecular Components",
      collapsible: true,
      items: [
        { text: 'Hero', link: '/molecules/Hero' },
        { text: 'comp 2', link: '/molecules/' },
        { text: 'comp 3', link: '/molecules/'},
        { text: 'comp 4', link: '/molecules/' },
      ]
    },
      {
        text: "Composition Components",
        collapsible: true,
        items: [
          { text: 'Cluster', link: '/compositions/Cluster' },
          { text: 'Grid', link: '/compositions/Grid' },
          { text: 'Box', link: '/compositions/Box'},
          { text: 'Stack', link: '/compositions/Stack' },
          { text: 'Imposter', link: '/compositions/Imposter' },
          { text: 'Center', link: '/compositions/Center' },
          { text: 'Sidebar', link: '/compositions/Sidebar'},
          { text: 'Switcher', link: '/compositions/Switcher' },
          { text: 'Cover', link: '/compositions/Cover' },
          { text: 'Frame', link: '/compositions/Frame' },
          { text: 'Reel', link: '/compositions/Reel'},
          { text: 'Icon', link: '/compositions/Icon' },
        ]
      },
      {
        text: "Layout Components",
        collapsible: true,
        items: [
          { text: 'comp1', link: '/layouts/' },
          { text: 'comp 2', link: '/layouts/' },
          { text: 'comp 3', link: '/layouts/'},
          { text: 'comp 4', link: '/layouts/' },
        ]
      }
]

const simpleMenu = [
  {
    text: 'Guides',
    items: [
      { text: 'Quickstart Guide', link: '/guide/quickstart' },
      { text: 'Design System Methods', link: '/guide/designsys' },
      { text: 'CUBE', link: '/guide/cube' },
      { text: 'Intrinsic Design', link: '/guide/intrinsic' },
    ]
  },
  {
    text: 'Docs',
    items: [
      { text: 'Introduction', link: '/README' },
      { text: 'Usage', link: '/docs/usage' },
      { text: 'Styling', link: '/styles/' },
      { text: 'Atoms', link: '/atoms/' },
      { text: 'Molecules', link: '/molecules/' },
      { text: 'Compositions', link: '/compositions/'},
      { text: 'Layouts', link: '/layouts/' },
    ]
  }
]

export default {
    title: 'Nebula',
    description: 'Because you are made of star stuff.',
    themeConfig: {
        siteTitle: 'Get Nebula',
        logo: '/my-logo.svg',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Docs', link: '/docs/introduction' },
            { text: 'Components', link: '/atoms/' },
            { text: 'Changelog', link: '/Changelog' }
          ],
        sidebar: {
          '/atoms/': componentMenu,
          '/molecules/' : componentMenu,
          '/compositions/': componentMenu,
          '/layouts/': componentMenu,
          '/': simpleMenu,
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present Hyperion Web'
          }
      }
  }