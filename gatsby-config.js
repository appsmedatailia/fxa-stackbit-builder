const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-MSL4NQP" 
             
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        'gatsby-plugin-robots-txt',
        {
            resolve: "gatsby-plugin-sitemap",
            options: {

                excludes: ['/confirm-email-optin/','/contact-success/','/subscribe-success/','/email-optin-confirmed/fba-guide-and-product-research-tools/'],
                serialize: ({ path, modifiedGmt }) => {
                    return {
                    url: path,
                    lastmod: modifiedGmt,
                    }
                },
            },
          },
          {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
              siteUrl: `https://blog.fennex.agency/`,
              stripQueryString: true,
            },
          },
          {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
              googleAnalytics: {
                trackingId: 'G-1T5K47JBV0', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-analytics', // default
                anonymize: true, // default
                allowAdFeatures: false // default
              },
              googleTagManager: {
                trackingId: 'GTM-MSL4NQP', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-tagmanager', // default
                dataLayerName: 'dataLayer', // default,
                routeChangeEvent:'gatsby-route-change'
              },
              facebookPixel: {
                pixelId: '200151941962432', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-facebook-pixel', // default
              },
              // defines the environments where the tracking should be available  - default is ["production"]
              environments: ['production', 'development']
            },
          }
    ]
};
