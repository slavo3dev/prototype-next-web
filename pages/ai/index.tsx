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
      <main className="nft-body">
  
    <h1 className="nft-heading">Make a unique NFT with our AI bot</h1>
  
  <div className="nft">
    <div className='main'>
      <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
      <h2>Kibertopiks #4269</h2>
      <p className='nft-description'>Generate and sell</p>
      <div className='tokenInfo'>
        <div className="price">
          <ins>◘</ins>
          <p>0.031 ETH</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div>
      <hr />
      <div className='creator'>
        <div className='wrapper'>
          <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
      </div>
    </div>
  </div>
</main>
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
