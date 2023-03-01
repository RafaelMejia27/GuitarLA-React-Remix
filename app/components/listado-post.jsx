import Post from "./post"

export default function ListadoPost({post}) {
  return (
    <>
        <h2 className='heading'>Blog</h2>
        <div className='blog'>
            {post.map(post => (
                <Post
                    key={post.id} 
                    post={post.attributes}
                />
            ))}
      </div>
    </>
  )
}
