export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const resultado = await respuesta.json() 
    return resultado
}

export async function getPostByUrl(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}