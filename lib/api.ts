import Blog from "pages/blog";
import client from "./sanity"


export async function getAllPosts ()
{

    const blogFields =`
    title, 
    subtitle,
    isFeatured, 
    "slug": slug.current,
    date,
    "coverImage": coverImage.asset->url
    `

   const blogData = await client
       .fetch( `*[_type == "blog"]{${blogFields}}` );
    
    return blogData;
}

export async function getAllAuthors ()
{ 
    const authorFileds = `
     name,
     url,
     avatar`
     
    const authorData = await client
       .fetch( `*[_type == "author"]{${authorFileds}}` );
    
    return authorData;
}