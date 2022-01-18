import { PageBanner } from "components";
import { BlogPostCard, BlogInternalNavigation } from "components";

const BlogOne = () => {
  return (
    <>
      <PageBanner
        pageTitle='Our Latest Articles'
        pageSubTitle='Prototype.Next is the easiest place to buy and sell cryptocurrency.'
      />

      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>

            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
              author={ "Steven Smith" }
             
            />
            <BlogInternalNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogOne;
