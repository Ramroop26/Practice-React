import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Card = () => {
  return (
    <>
       <Card style={{ width: '18rem', display: "-ms-grid", }}>
        <Card.Img variant="top" src={ima1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Card</Button>
        </Card.Body>
      </Card><br />

      <Card style={{ width: '18rem', }}>
        <Card.Img variant="top" src={ima2} />
        <Card.Body >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Card</Button>
        </Card.Body>
      </Card> <br />


      <Card style={{ width: '18rem', }} >
        <Card.Img variant="top" src={ima3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Card</Button>
        </Card.Body>
      </Card> <br />

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ima1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Card</Button>
        </Card.Body>
      </Card>


    </>
  )
}

export default Card;
