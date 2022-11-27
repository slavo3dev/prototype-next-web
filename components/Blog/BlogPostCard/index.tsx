import Link from 'next/link';

interface BlogProps
{
    category: string, 
    title: string, 
    postText: string,
    imgAuthorUrl: string,
    author: string,
    imgBlogUrl: string,
    slug: string
} 

export const BlogPostCard: React.FC<BlogProps> = ({category, title, postText, imgAuthorUrl, imgBlogUrl, author, slug}) =>
{
    return (
        <>
           <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                <Link legacyBehavior href={`/blog/${slug}`} className='d-block'>
                      <img src={imgBlogUrl} alt='image' />
                </Link>
                  <div className='tag-list'>
                     <a href='#'>{category}</a>
                  </div>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link legacyBehavior href={`/blog/${slug}`}>
                        {title}
                    </Link>
                  </h3>
                  <p>
                    {postText}
                  </p>
                  <div className='author d-flex align-items-center'>
                     <img src={imgAuthorUrl} alt='image' />
                     <a href='blog.html'>{author}</a>
                  </div>
                  <Link legacyBehavior href={`/blog/${slug}`} className='link-btn'>
                      <i className='bx bx-right-arrow-alt'></i>
                    </Link>
                </div>
              </div>
            </div>
        
        </>
    )
}
