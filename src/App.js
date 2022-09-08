import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import  Product from "./component/Product.js";
import Nav from  'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar'
import Container from  'react-bootstrap/Container'
import Form from  'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'



function App() {
  
  

  const Products = 
    [
       <Product type= "Sport" name ="2021 Lamborghini Huracan EVO" img="./img/LamborghiniHuracanEVO.jpg" price="333633" id="0" />,
       <Product type= "Sport" name ="2021 Mercedes-Benz AMG GT" img="./img/2021 Mercedes-Benz AMG GT.jpeg" price= " 131750" id="1"/>,
     
       <Product type= "Coupe" name ="ASTON MARTIN DB9 Coupé 6.0 V12 " img="./img/ASTON MARTIN DB9 Coupé 6.0 V12 (Coupé).jpg" price= "39.950" id="2"/>,
       <Product type= "Coupe" name ="TESLA Model 3 Long R. Dual AWD (Limousine) " img="./img/TESLA Model 3 Long R. Dual AWD (Limousine)(coupe).jpg" price= "47400" id="3"/>,
       <Product type= "Suv" name ="2021 CHEVROLET trailblazer 4dr suv " img="./img/2021_chevrolet_trailblazer_4dr-suv.jpg" price= "47400" id="4"/>,
       <Product type= "Suv" name ="2022 VOLKSWAGEN taos 4dr suv " img="./img/2022_volkswagen_taos_4dr-suv.jpg" price= "47400" id="5"/>,
       
    ]

   
   

  

  
  return (
    
    <Stack className="App"  gap={3}>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
        <Navbar.Brand href="#home">Car shop</Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link  as={Link}  to="">Home</Nav.Link>
         <Nav.Link as={Link} to="component/ShoppingPage" >Buy Cars</Nav.Link>
         </Nav>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
        </Container>
      </Navbar>
      <Outlet context={Products}/>
    </Stack>
    
  );
}

export default App;
