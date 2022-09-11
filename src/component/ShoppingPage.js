import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { ShoppingCart } from "./ShoppingCart";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';



import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function ShoppingPage(prop) {
  const allItem = useOutletContext()[0]
  let search = useOutletContext()[1]
  const [count, setCount] = useState(0)
  const [max, setMax] = useState(0)
  const [maxkm, setMaxKm] = useState(0)

  const [DisplayedProducts, setDisplayedProducts] = useState(
    allItem
  )




  const [ButtonClicked, setButtonClicked] = useState(false)
  const [CurrentIndex, setCurrentIndex] = useState(-1)
  const [Show, setShow] = useState(true)

  const addCartoCart = (e) => {
    setButtonClicked(true);
    setCurrentIndex(+(e.target.getAttribute("id")))
    setCount(count + 1)

  }

  let handlePriceCHange = (e) => {
    setDisplayedProducts(allItem.filter((elem) => { return ((+elem.props.price) <= (+e.target.value)) }))
  }

  let handleKmCHange = (e) => {
    setDisplayedProducts(allItem.filter((elem) => { return ((+elem.props.km) <= (+e.target.value)) }))
  }
  let handleSubcategory = (e) => {
    
    if (e.target.textContent === "Sport  car") {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.type === "Sport") }))
    } else if (e.target.textContent === "Suv") {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.type === "Suv") }))
    } else if (e.target.textContent === "Coupe") {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.type === "Coupe") }))
    } else if ((e.target.textContent === "Hatchbacks")) {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.type === "Hatchback") }))
    } else if ((e.target.textContent === "New")) {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.status === "new") }))
    } else if ((e.target.textContent === "Used")) {
      setDisplayedProducts(allItem.filter((elem) => { return (elem.props.status === "used") }))
    }
  }

  let toRender = ""
  if (ButtonClicked) {

    toRender = <ShoppingCart show={[setShow, Show]} index={CurrentIndex} />
  } else {
    toRender = null
  }

  useEffect(() => {
    let maxelem = DisplayedProducts.reduce((previous, current) => {
      
      if ((+previous.props.price) > (+current.props.price)) {
        return previous
      }
      else {
        return current
      }
    })
    
    setMax(maxelem.props.price)
    let maxelemkm = DisplayedProducts.reduce((previous, current) => {
     
      if ((+previous.props.km) > (+current.props.km)) {
        return previous
      }
      else {
        return current
      }
    })
   
    setMaxKm(maxelemkm.props.km)
    setShow(true);
  }, [count])

  useEffect(()=>{
    if (search !=="") {
      setDisplayedProducts(allItem.filter((elem)=>{if(elem.props.name.toLowerCase().includes(search.toLowerCase())){return elem}}))
    } else {
      setDisplayedProducts(allItem)
    }
  },[search])



  return (
    <Container fluid className="ShoppingPage "  >

      <Row>
        <Navbar style={{ display: "flex", flexDirection: "column", alignItems: "center" }}  as={Col} xs={2} >


          <Nav className=" flex-column" style={{ position: "sticky", top: "5rem" }} navbar fill justify >
            <Navbar.Brand >Type:</Navbar.Brand>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>Sport  car</Nav.Link></Nav.Item>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>Suv</Nav.Link></Nav.Item>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>Coupe</Nav.Link></Nav.Item>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>Hatchbacks</Nav.Link></Nav.Item>
          </Nav>
          <Nav className="flex-column" style={{ position: "sticky", top: "18rem" }} fill justify >
            <Navbar.Brand   >Status:</Navbar.Brand>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>New</Nav.Link></Nav.Item>
            <Nav.Item onClick={handleSubcategory}><Nav.Link>Used</Nav.Link></Nav.Item>

          </Nav>

          <Nav className="flex-column" style={{ position: "sticky", top: "25rem" }} fill justify >
            <Navbar.Brand   >Price:</Navbar.Brand>
            <Nav.Item >
              <Form.Range onChange={handlePriceCHange} min={0} max={max} />
              <div style={{display:"flex" ,justifyContent:"space-between"}}><div>0</div> <div>{max}</div></div>
            </Nav.Item>


          </Nav>

          <Nav className="flex-column" style={{ position: "sticky", top: "32rem" }} fill justify >
            <Navbar.Brand   >Km:</Navbar.Brand>
            <Nav.Item >
              <Form.Range onChange={handleKmCHange} min={0} max={maxkm} />
              <div style={{display:"flex" ,justifyContent:"space-between"}}><div>0</div> <div>{maxkm}</div></div>
            </Nav.Item>


          </Nav>





        </Navbar>
        <Col style={{paddingTop:"1rem"}}  >
          <Row xs={1} md={3} className="g-4">
            {DisplayedProducts.map((singleProduct, index) => {
              
              return (

                <Col >

                  <Card style={{ width: '16rem', height: "100%", }} id={index} >
                    <Card.Img variant="top" style={{ width: "16rem", height: "9rem" }} src={require(singleProduct.props.img + "")} />

                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <Card.Title>{singleProduct.props.name}</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item><h5>Type:</h5>{singleProduct.props.type}</ListGroup.Item>
                        <ListGroup.Item><h5>Status:</h5>{singleProduct.props.status}</ListGroup.Item>
                        <ListGroup.Item><h5>Km:</h5>{singleProduct.props.km}</ListGroup.Item>
                        <ListGroup.Item><h5>Price:</h5>{singleProduct.props.price}$</ListGroup.Item>

                      </ListGroup>
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


export { ShoppingPage }