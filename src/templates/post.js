import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';

// import { Disqus } from 'gatsby-plugin-disqus';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
        /* const disqusConfig = {
          url: _.trim(_.get(this.props, 'pageContext.site.siteMetadata.siteUrl', null), '/') + withPrefix(_.get(this.props, 'path', null)),
          identifier: _.get(this.props, 'path', null),
          title: _.get(this.props, 'pageContext.frontmatter.title', null),
        }; */
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header inner-md">
                  <div className="post-meta">
                    <time className="published"
                      dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%A, %B %e, %Y')}</time>
                  </div>
                  <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'pageContext.frontmatter.content_img_path', null) && (
                <div className="post-thumbnail">
                  <img className="thumbnail" src={withPrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path', null))} alt={_.get(this.props, 'pageContext.frontmatter.content_img_alt', null)} title={_.get(this.props, 'pageContext.frontmatter.img_title', null)} width="640" height="360" />
                </div>
                )}
                <div className="post-content inner-md">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
              </article>
              {/* <Disqus config={disqusConfig} /> */}
            </Layout>
        );
    }
}
