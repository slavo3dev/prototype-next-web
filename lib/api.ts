import client from "./sanity"


export async function getAllPosts ()
{
   const blogData = await client
       .fetch( `*[_type == "blog"]{title, subtitle, slug, isFeatured}` );
    
    return blogData;
}