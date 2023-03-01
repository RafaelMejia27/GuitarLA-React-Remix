import { useLoaderData } from '@remix-run/react'
import ListadoPost from '~/components/listado-post'
import { getPosts } from '~/models/post.server'


export function meta(){
  return{
    title: 'GuitarLA - Nuestro blog',
    description: 'GuitarLA, blog de musica y venta de guitarras'
  }
}

export async function loader(){
  const post = await getPosts()
  return post.data
}

function Blog() {

  const post = useLoaderData()

  return (
    <>
      <ListadoPost 
        post={post}
      />
    </>
  )
}

export default Blog