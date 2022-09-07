import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';




function ShoppingCart (prop) {

    const [productstobuy, setProducts] = useState([]);
    const [show, setShow] = useState(true);
    console.log(productstobuy)
    
    const handleClose = () => prop.show[0](false);
    
    
    const allItems = useOutletContext()

   const handlePlusMinus = (sign,id) => {
    console.log("i'm in")
     const newarray = [...productstobuy]
     let   tocheck = allItems.filter((elem,index)=>{return index === id})
     console.log(tocheck[0])
     console.log(newarray)
      let index= newarray.findIndex((elem)=>{return (elem[0]===tocheck[0])})
      console.log(index)
     console.log(newarray[index][1])
     if (sign === "+") {
       newarray[index][1] = newarray[index][1]+1
     } else if ((newarray[index][1]-1) >= 1) {
      newarray[index][1] = newarray[index][1]-1
     }
     setProducts(newarray);
     
    }
 console.log(prop.show[0])
 console.log(prop.show[1])
 console.log(prop.show[0](true))
    
 useEffect(()=>{
  
  
     
      let  toadd = allItems.filter((elem,index)=>{return index === prop.index})
    
    let productexsist = productstobuy.filter((elem)=>{return elem[0]===toadd})
    


    if (!productexsist.length) {
      
      setProducts(oldArray=>[...oldArray,[toadd[0],1]]);
      console.log( productstobuy)
      
    } else {
      console.log("wrong")
    } 
     
        
    },[prop.index])

    
    





    return (
        <Offcanvas id="shoppingcart"  show={prop.show[1]} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
        {productstobuy.length>0? productstobuy.map((product)=>{
                console.log(product[1]*(+product[0].props.price))
                console.log(typeof(product[1]))
                console.log((product[0].props.price))
                return(<div className="product" id={prop.index}>{product[0]}<div>{(+product[1])*(+product[0].props.price)}</div><div><button id={prop.index} onClick={()=>{handlePlusMinus("-",prop.index)}}>-</button><input type="number" value={product[1]} min="1"/><button id={prop.index} onClick={()=>{handlePlusMinus("+",prop.index)}}>+</button></div></div>)
            

        }):null}
        </Offcanvas.Body>
        </Offcanvas>
            
         
        
        
    );




}


export {ShoppingCart}