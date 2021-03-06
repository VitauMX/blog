import React from 'react'
import usePostsPreviews from './UsePostsPreviews'
import PostPreview from '../components/PostPreview'

export default function PostFeed() {
  return (
    <section className='postFeed'>
      <h3 className='title'>Artículos más recientes</h3>

      <div className='postFeed-content'>
        {usePostsPreviews().map((postInfo, key) => {
          const {
            fields: { slug },
            frontmatter: { title, tags, featuredimage },
          } = postInfo.node

          return (
            <PostPreview
              key={key}
              title={title}
              url={slug}
              image={featuredimage}
              tags={tags}
            />
          )
        })}
      </div>
    </section>
  )
}
