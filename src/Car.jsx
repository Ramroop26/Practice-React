
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Make sure to import or define your images
import image1 from "./images/ima1.jpeg";
import image2 from "./images/ima2.jpeg";
import image3 from "./images/ima3.jpeg";


const Car = () => {
  return (
    <>
     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>

      
      </div>
    </>
  );
};

export default Car;
