import RegisterArea from '../../components/Common/RegisterArea';
import { getPostData, getPostsFiles } from "lib/post-lib";
import { PostContent } from "@/components/Blog";



const BlogDetails = ( { post }: any ) =>
{    
  return (
    <>
      <div className='blog-details-area ptb-100'>
        <div className='container'>
            <PostContent post={post} />
        </div>
      </div>
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};


export function getStaticProps ( context: { params :{ slug: string} } )
{
	const { slug } = context.params;
	const postData = getPostData(slug); 

	return {
		props: {
			post: postData
		},
		revalidate: 60
	};
}

export function getStaticPaths ()
{
	const postName = getPostsFiles();
    const slugs = postName.map( fileName => fileName.replace( /\.md$/, "" ) );
    
	return {
		paths: slugs.map( slug => ( { params: {slug: slug} } )),
		fallback: false
	};    
}

export default BlogDetails;
