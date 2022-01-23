import Blog from "pages/blog";
import client from "./sanity"


export async function getAllPosts ()
{

    const blogFields =`
    title, 
    subtitle,
    isFeatured, 
    slug
    `

   const blogData = await client
       .fetch( `*[_type == "blog"]{${blogFields}}` );
    
    return blogData;
}