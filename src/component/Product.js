import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/esm/Table"

function Product (prop) {
    
   
    
    return (
        <div className="product"  >
        <p>{prop.type}</p>
        <img  width="200px" height="200px" alt="" src={require( ""+ prop.img)}/>
        <p>{prop.name}</p>
       
        </div>
    );
}



export  default Product