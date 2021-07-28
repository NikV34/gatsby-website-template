module.exports = {
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/content',
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          xs: '(min-width: 0px)',
          sm: '(min-width: 320px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 1024px)',
          xl: '(min-width: 1200px)',
        },
      },
    },
  ],
};
