import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {  useOutletContext } from "react-router-dom";

function Home (prop) {
    const allItem = useOutletContext()[0]  
    console.log(allItem)
    
    
    return (
        <Carousel >
    { allItem.map((elem)=>{return(
        
        <Carousel.Item >
        <img
         className= "d-block w-100"
         style={{width:"100vh", height:"91vh"}}
         
          src={require(""+ elem.props.img )}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Car shop</h3>
          <p>Our deals sells faster than any of our competitor's cars</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        

    )
    })}
    
    </Carousel>
    );
}


export {Home}
