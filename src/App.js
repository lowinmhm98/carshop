import React, { useState ,useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import  Product from "./component/Product.js";
import Nav from  'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar'
import Container from  'react-bootstrap/Container'
import Form from  'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import axios from 'axios'



function App() {
  const [search,setSearch] =useState("")
  

  const[ Products,setProducts] = useState(
    [
      /*
       <Product type= "Sport" name ="Lamborghini Huracan EVO" img="./img/LamborghiniHuracanEVO.jpg" price="333633" year="2021" status="new"  km ="0" id="0" />,
       <Product type= "Sport" name ="Mercedes-Benz AMG GT" img="./img/2021 Mercedes-Benz AMG GT.png" price= " 131750" year="2021" status="used" km="22345" id="1"/>,
     
       <Product type= "Coupe" name ="ASTON MARTIN DB9 Coupé 6.0 V12 " img="./img/ASTON MARTIN DB9 Coupé 6.0 V12 (Coupé).jpg" price= "39950" year="2022" status="used" km="43000" id="2"/>,
       <Product type= "Coupe" name ="TESLA Model 3 Long R. Dual AWD" img="./img/TESLA Model 3 Long R. Dual AWD (Limousine)(coupe).jpeg" price= "47400" year="2020" status="new" km="0" id="3"/>,
       <Product type= "Suv" name ="CHEVROLET trailblazer 4dr" img="./img/2021_chevrolet_trailblazer_4dr-suv.png" price= "37600" year="2021" status="used" km="85432" id="4"/>,
       <Product type= "Suv" name ="VOLKSWAGEN taos 4dr" img="./img/2022_volkswagen_taos_4dr-suv.png" price= "66400" year="2022" status="used" km="12300" id="5"/>,
       <Product type= "Hatchback" name ="CHEVROLET bolt ev" img="./img/2022-chevrolet-bolt-ev-(hatchbacks).png" price= "126400" year="2022" status="new" km="0" id="6"/>,
       <Product type= "Hatchback" name ="KIA rio" img="./img/Kia rio (hatchbacks).png" price= "136800" year="2022" status="new" km="0" id="7"/>,
       */
       
    ])
;

    useEffect (()=>{
      let notes
      axios
     .get('http://localhost:3001/Items')
     .then(response => {
      notes = response.data
    console.log(notes)
    
     setProducts(notes.map((elem)=>{
      return( <Product type= {elem.type} name = {elem.name} img= {elem.img} price={elem.price} year={elem.year} status={elem.status}km ={elem.km} id={elem.id}/>)
     }))
     
  })
  

    },[])


    const handleSearch =(e)=> {
      setSearch(e.target.value);
    }

   
   

  

  
  return (
    
    <div className="App" >
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
              onChange= {handleSearch}
            />
           
          </Form>
        
        </Container>
      </Navbar>
      <Outlet context={[Products,search]}/>
    </div>
    
  );
}

export default App;
