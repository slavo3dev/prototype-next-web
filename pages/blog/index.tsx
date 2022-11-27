import { PageBanner } from "components";
import type { NextPage } from "next";
import { BlogPostCard, BlogInternalNavigation } from "components";
import { getAllPosts } from "lib/post-lib";
// import { useRouter } from "next/router";
import { PostType } from "@/Types/PostType"; 

const Blog: NextPage = ( { posts }: any ) =>
{

//   const router = useRouter
//   function findCategoryHandle ( category: string )
// 	{
// 		const fullPath = `/category/${category}`;
// 		router.push(fullPath);
// 	}
    
  return (
    <>
      <PageBanner
        pageTitle='Our Articles'
        pageSubTitle='Dicentralized Web | Blockchain | NFT | Crypto'
      />
      <div className='blog-area ptb-100'>
        <div className='container'>
            <div className='row justify-content-center'>
                {
                    posts.map( (post: PostType) => <BlogPostCard
                        key={post.title + Math.floor(Math.random() * 100) }
                        category={post.category}
                        title={post.title}
                        postText={post.excerpt}
                        imgBlogUrl={ `/images/post-img/${post.image}` }
                        imgAuthorUrl={ '/images/user/user1.jpg' }
                        author={ post.author }
                        slug={ post.slug } /> )
                }      
            {/* <BlogInternalNavigation /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export function getStaticProps() {
	const featuredPost = getAllPosts(); 

	return {
		props: {
			posts: featuredPost
		},
		revalidate: 60
	};
}

export default Blog;
