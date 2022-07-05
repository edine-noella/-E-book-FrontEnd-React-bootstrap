import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card , Row, Col, Container,Form ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        const data ={
            username,
            password
        }
        console.log(data);

        try {
            const response = axios('http://localhost:5000/api/v1/users/signin', {data});
            const user = response.data;
            localStorage.setItem('token', JSON.stringify(user));
        } catch (error) {
            setError(error.message);
        }
            
        }

  return (

    <div className='mt-5'>
        <Container>
        <form>
            <Form.Text className='mb-3'>Login To e-book</Form.Text>
            <Row>
               <Col md>
               <Form.Group controlId="formUsername">
                <Form.Label value={username} onChangeCapture={(value)=>console.log(value)}>Username</Form.Label>
                <Form.Control type="text" placeholder="username"/>
        
            </Form.Group>
               </Col>

               <Col md>
               <Form.Group controlId="formPassword">
                <Form.Label onChange={(value)=>setPassword(value.target)}>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
            </Form.Group>
               </Col>

            </Row>

            <Button varient="primary" type="submit" className='mt-4' onClick={()=>handleSubmit()}>Login</Button>
            <Form.Group className='mb-3 '>
               <Row>

                <Col md>
                   <Form.Text>Don't have an account ?</Form.Text>
               </Col>

               <Col md>
               <Link to={"/signup"}>Signup</Link>
               </Col>

               <Col md>
               <Link to={'/dashboard'}>Dashboard</Link>
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

export default Login