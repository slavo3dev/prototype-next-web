import { BlogLayout, PageBanner, AuthorInfo, CardListItem, CardItem, BlogPostCard } from "components";
import { Row, Col } from 'react-bootstrap';
import { getAllPosts } from "lib/api";


interface BlogProps
{
  blog: {
    map: (post) => void
  }
}


const Blog: React.FC<BlogProps> = ( { blog } ) =>
{
  return (
    <>
    <PageBanner
        pageTitle='Our Latest Articles'
        pageSubTitle='Prototype.Next is the easiest place to start and learn about WEB 3.0, Blockchain, Dapps, NFTs....'
          />
    <BlogLayout>
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            <AuthorInfo />
          </Col>
        </Row>
        <hr/>
        <Row className="mb-5">
          <Col md="10">
             <CardListItem />
            </Col>
            { blog.map( post =>
            
            <Col key={post.slug} md="4">
                <CardItem
                  title={ post.title }
                  subtitle={ post.subtitle }
                  image={ post.coverImage }
                  date={ post.date}
                  />
            </Col> )}
          </Row>
        </div>
    </BlogLayout>
    </>
  );
};

export default Blog;

export async function getStaticProps ()
{
  const blog = await getAllPosts()
  return {
    props: {
      blog: blog
    }
  }
}
