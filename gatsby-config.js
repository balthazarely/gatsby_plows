require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.plowops.com',
    title: 'Plow Ops',
    description:
      'Rapidly changing road and weather conditions make storm operations chaotic. Remove the stress from your next major storm event. Spend less time managing and more time plowing with PlowOps. ',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '19536649',
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/blog/',
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugin: [
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
  ],
};
