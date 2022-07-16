import { PageBanner } from "components";
import { BlogPostCard, BlogInternalNavigation } from "components";

const BlogOne = () => {
  return (
    <>
      <PageBanner
        pageTitle='Our Articles'
        pageSubTitle='Understand process of Software Web/Mobile Developemnt & Dicentralized Web'
      />

      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <BlogPostCard
                          category={ "Filecoin" }
                          title={ "How Filecoin is Up 50% in a Week & Could Take More Profits" }
                          postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
                          imgBlogUrl={ "/images/blog/blog1.jpg" }
                          imgAuthorUrl={ '/images/user/user1.jpg' }
                          author={ "Steven Smith" }
                          slug={ "test"}        />
            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
               author={ "Steven Smith" }
                          slug={ "test" }
                      />
            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
              author={ "Steven Smith" }
              slug={ "test"}        />
            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
              author={ "Steven Smith" }
              slug={ "test"}/>
            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
              author={ "Steven Smith" }
              slug={ "test"}        />
            <BlogPostCard
              category={"Filecoin"}
              title={"How Filecoin is Up 50% in a Week & Could Take More Profits"}
              postText={ "Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt." }
              imgBlogUrl={"/images/blog/blog1.jpg"}
              imgAuthorUrl={'/images/user/user1.jpg' }
              author={ "Steven Smith" }
              slug={ "test"}        />
            <BlogInternalNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogOne;
