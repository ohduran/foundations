module.exports = {
  siteMetadata: {
    siteTitle: `Foundations`,
    defaultTitle: `Studio Foundations`,
    siteTitleShort: `Foundations`,
    siteDescription: `Guidelines to keep the Studio brand consistent.`,
    siteUrl: `https://foundations.alvaroduran.com`,
    siteAuthor: `Alvaro Duran`,
    siteImage: `/favicon.png`,
    siteLanguage: `en`,
    themeColor: `#eceff4`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#2e3440`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://alvaroduran.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
