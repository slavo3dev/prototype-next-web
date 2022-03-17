import { Card } from "react-bootstrap"

interface CardPostProps
{
  title: string,
  subtitle: string,
  date: string, 
  image: string,
  author: {
    avatar: string,
    url: string,
    name: string
  }
}

export const CardItem: React.FC<CardPostProps> = ( { title, subtitle, date, image, author } ) =>
{
  console.log( "url ", image )
  console.log( "author ", author)
    return (
        <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header
                    className="d-flex flex-row">
                    <img
                      src={author?.avatar}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"/>
                    <div>
              <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
              <Card.Text className="card-date">{ date }</Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
               <Card.Img
                      src={ image }
                      alt={title }
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{ subtitle  }</Card.Text>
                  </Card.Body>
                </div>
                <a className="card-button">
                  Read More
                </a>
              </Card>
    )
}