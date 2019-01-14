import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <Link to={post.slug} style={{  }}>
              <div
                className="content"
                style={{ border: '1px solid #eaecee', borderRadius: '12px', padding: '2em 4em', marginBottom: '2em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-grey-dark has-text-weight-bold" to={post.slug}>
                    {post.title}
                  </Link>
                  <span> &bull; </span>
                  <small className="has-text-dark">
                    {post.date}
                  </small>
                </p>
                <div>
                  <div className="has-text-dark"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
