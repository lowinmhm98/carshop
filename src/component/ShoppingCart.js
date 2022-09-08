import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';




function ShoppingCart (prop) {

    const [productstobuy, setProducts] = useState([]);
    
    console.log(productstobuy)
    
    const handleClose = () =>{prop.show[0](false)};
    
    
    const allItems = useOutletContext()

   const handlePlusMinus = (sign,id) => {
   
     const newarray = [...productstobuy]
     let   tocheck = allItems.filter((elem,index)=>{return index === id})
    
     console.log(newarray)
      
     
     if (sign === "+") {
       newarray[id][1] = newarray[id][1]+1
     } else if ((newarray[id][1]-1) >= 1) {
      newarray[id][1] = newarray[id][1]-1
     }
     setProducts(newarray);
     
    }

    
 useEffect(()=>{
  
  
     
      let  toadd = allItems.filter((elem,index)=>{return index === prop.index})
    console.log(toadd)
    let productexsist = productstobuy.filter((elem)=>{
     console.log(elem[0].props.id)
     
     


      return elem[0].props.id===toadd[0].props.id})
    console.log(productexsist)
    


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
               
                return(<div className="product" id={product[0].props.id}>{product[0]}<div>{(+product[1])*(+product[0].props.price)}</div><div><button id={product[0].props.id} onClick={()=>{handlePlusMinus("-",product[0].props.id)}}>-</button><input type="number" value={product[1]} min="1"/><button id={product[0].props.id} onClick={()=>{handlePlusMinus("+",product[0].props.id)}}>+</button></div></div>)
            

        }):null}
        </Offcanvas.Body>
        </Offcanvas>
            
         
        
        
    );




}


export {ShoppingCart}