import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { ShoppingCart } from "./ShoppingCart";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';

import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack'


function ShoppingPage(prop) {
 const allItem = useOutletContext()
  
  const [DisplayedProducts, setDisplayedProducts] = useState(
    allItem
  )

   
  
  const [ButtonClicked,setButtonClicked] = useState(false)
  const [CurrentIndex,setCurrentIndex] =useState(-1)
  
      const addCartoCart = (e) => {
       setButtonClicked(  true) ;
        setCurrentIndex(+( e.target.getAttribute("id") ))
        
      }
      let handleSubcategory = (e)=> {
        console.log(e.target.textContent)
        if (e.target.textContent === "Sport  car") {
          setDisplayedProducts(allItem.filter((elem)=>{return(elem.props.type==="Sport")}))
        } else if (e.target.textContent ==="Utility car") {
          setDisplayedProducts(allItem.filter((elem)=>{return(elem.props.type==="Utility")}))
        } else {
          setDisplayedProducts(allItem.filter((elem)=>{return(elem.props.type==="Coupe")}))
        }
      }
      
     let toRender= ""
      if (ButtonClicked) {
        toRender = <ShoppingCart show={[setButtonClicked,ButtonClicked]} index={CurrentIndex}/>
      } else {
        toRender = null
      }


  return(
    <Container fluid className="ShoppingPage "  >
      
       <Row>
        <Col xs={2} className="sidebarwrapper">
          
            <Navbar  className="sidebar"sticky="top" >
        <Nav className=" flex-column" fill justify >
        <Nav.Item onClick={handleSubcategory}><Nav.Link>Sport  car</Nav.Link></Nav.Item>
        <Nav.Item onClick={handleSubcategory}><Nav.Link>Utility car</Nav.Link></Nav.Item>
        <Nav.Item onClick={handleSubcategory}><Nav.Link>Coupe</Nav.Link></Nav.Item>
        </Nav>
        </Navbar>
        
       
       
        
       </Col>
       <Col>
    <Row  xs={1} md={3} className="g-4">
    {DisplayedProducts.map((singleProduct,index)=>{ console.log(singleProduct)
      return(
        
        <Col >
           
           <Card style={{ width: '16rem' }} id={index} >
       <Card.Img variant="top" style={{width:"16rem", height:"9rem"}} src={require(singleProduct.props.img+ "")}/>
      
        <Card.Body>
            <Card.Title>{singleProduct.props.name}</Card.Title> 
            <Button variant="dark" id={index} onClick={addCartoCart}>Add to cart</Button>
        </Card.Body>
      
        
      </Card>
      
      </Col>
      )
    

    })}
    </Row>
    </Col>
    
    {toRender}
    
    </Row>
    </Container>

    



  );


}


export {ShoppingPage}