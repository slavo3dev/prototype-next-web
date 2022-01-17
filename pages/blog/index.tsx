import PageBanner from '../../components/Common/PageBanner';
import { BlogNavbar } from "../../components/Layout/BlogNavbar";
import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';


const Blog = () => {
  return (
      <>
      <PageBanner
        pageTitle='Our Latest Articles'
        pageSubTitle='Prototype.Next is the easiest place to buy and sell cryptocurrency.'
          />
    <div>
       <Container>
     <BlogNavbar />
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src=""
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                My name is Slavo_3 and I am an experienced software engineer & freelance developer.
                and this is my blog page.
                </p>
              </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr/>
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header
                    className="d-flex flex-row">
                    <img
                      src={'https://via.placeholder.com/150'}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"/>
                      <div>
                        <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                        <Card.Text className="card-date">Placeholder Date</Card.Text>
                      </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a href="#" className="card-button">
                  Read More
                </a>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header
                    className="d-flex flex-row">
                    <img
                      src={'https://via.placeholder.com/150'}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"/>
                    <div>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src='https://via.placeholder.com/250'
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a className="card-button">
                  Read More
                </a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>{' | '}
          <a href="#">github</a>{' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
    </div>
    </>
  );
};

export default Blog;
