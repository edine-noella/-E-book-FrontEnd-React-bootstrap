import React from 'react'
import { Table , Container, Button, Row, Col, Form, FormControl, FormGroup, Breadcrumb,Card} from 'react-bootstrap'



function Dashboard() {
  const Books = [
    {name:'Alice in wonderland', author:'Edine'},
    {name:'Kinnporsche', author:'Noella'},
    {name:'Advanced Java', author:'gahamanyi'},
    {name:'100 steps to success', author:'tracy'},
    {name:'Love at first sight', author:'anitha'},
    
  ]
  return (

   <Container className='mt-5' >
  <Breadcrumb>
     <Breadcrumb.Item> <a className="App-link" href="https://reactjs.org"  > Dashboard </a></Breadcrumb.Item>
     <Breadcrumb.Item> <a className="App-link" href="https://reactjs.org"  > About Us </a></Breadcrumb.Item>
     <Breadcrumb.Item> <a className="App-link" href="https://reactjs.org"  >  Books Categories</a></Breadcrumb.Item>
     <Breadcrumb.Item> <a className="App-link" href="https://reactjs.org"  > Logout </a></Breadcrumb.Item>
   </Breadcrumb>

   <Container className='bg-light w-100'>
      <Form.Text>List of Books</Form.Text>
       <Row className='m-4'>

         <Col>
         <FormGroup>
              <FormControl type='text' placeholder='Search for a book'/>
              
         </FormGroup>
         </Col>
        
         <Col>
          <Button variant='primary' type='submit'>Add Book</Button>
         </Col>

       </Row>
     //functiont to display the books
      {Books.map((book,index)=>{
        return(
          <Row className='m-4'>
            <Col>{book.name}</Col>
            <Col>{book.author}</Col>
            <Col>{index}</Col>
          </Row>
        )
      })}

    <Table striped  >
      <tbody>
      <tr>
        <td>Name</td>
        <td>Author</td>
        <td></td>
        <td></td>
      </tr>
       {
        Books.map((Items)=>
        <tr>
        <td>{Items.name}</td>
        <td>{Items.author}</td>
        <td><Button variant='success' type='submit'>Edit</Button></td>
        <td><Button variant='danger' type='submit'>Delete</Button></td>
      </tr>
        )
       }
      </tbody>
    </Table>
    </Container>
    </Container>


  )
}

export default Dashboard