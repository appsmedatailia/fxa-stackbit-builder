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
        {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            policy: [
              {
                userAgent: "*",
                disallow: [
                  "/admin/",
                  "/downloads/",
                  "/contact/",
                  "/policies/",
                  "/lp/"
                ]                
              }
            ]
          }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {

                excludes: [
                '/contact/confirm-email-optin/',
                '/contact/contact-success/',
                '/contact/subscribe-success/',
                '/policies/affiliate-disclaimer/',
                '/policies/privacy-policy/',
                '/policies/disclaimer/',
                '/lp/free-amazon-fba-product-research-tools/email-confirmed/',
                '/lp/free-amazon-fba-product-research-tools/thank-you/',
                '/lp/free-amazon-fba-product-research-tools/jungle-scout/email-confirmed/',
                '/lp/free-amazon-fba-product-research-tools/jungle-scout/thank-you/',
                '/lp/free-amazon-fba-niche-market-research-ebook/thank-you/',
                '/lp/free-amazon-fba-niche-market-research-ebook/email-confirmed/',
                '/lp/free-amazon-fba-workflow-blueprint/thank-you/',
                '/lp/free-amazon-fba-workflow-blueprint/email-confirmed/'
              ],
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
              googleTagManager: {
                trackingId: 'GTM-MSL4NQP', // leave empty if you want to disable the tracker
                cookieName: 'cookieyes-analytics', // default
                dataLayerName: 'dataLayer', // default,
                routeChangeEvent:'gatsby-route-change'
              }
            },
          },
          {
            resolve: "gatsby-plugin-social9-socialshare",
            options: {
              content:  "7099548b08024e37ab8b1e77e0b15348",
              async: true,
              defer: true
            }
          },
          {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `fennex-blog`
            }
          }
    ]
};
