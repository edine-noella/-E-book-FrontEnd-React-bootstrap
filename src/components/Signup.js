import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Row, Col, Container,Form ,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div className='mt-3'>
    <Container>
    <form>
        <Form.Text className='mb-3'>Signup To e-book</Form.Text>
        <Row>
           <Col md>
           <Form.Group controlId="formNames">
            <Form.Label>Names</Form.Label>
            <Form.Control type="text" placeholder="Names"/>
    
        </Form.Group>
           </Col>

           <Col md>
           <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email@example.com"/>
        </Form.Group>
           </Col>

        </Row>
        <Row>
           <Col md>
           <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username"/>
    
        </Form.Group>
           </Col>

           <Col md>
           <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
           </Col>

        </Row>

        <Button varient="primary" type="submit" className='mt-4'>Signup</Button>
        <Form.Group className='mb-3 '>
           <Row>
            <Col md>
               <Form.Text>Already have an account ?</Form.Text>
           </Col>
           <Col md>
           <Link to={'/'}>Login</Link>
           </Col>
           </Row>
        </Form.Group>
    </form>
     <Card  className="mb-3 " style={{color:'black'}}>
        <Card.Img src="https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y=" style={{height:'345px'}}/>
        <Card.Body>
            <Card.Title>Online Library</Card.Title>
            <Card.Text>A wide range of different literature are ready to be explored. All of these books are free and available.</Card.Text>
            <Button variant="secondary" type="submit">Explore</Button>

        </Card.Body>
     </Card>
    </Container>
</div>
  )
}

export default Signup