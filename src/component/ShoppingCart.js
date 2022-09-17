import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image';




function ShoppingCart (prop) {
  let totalprice= 0;
    const [productstobuy, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    
    console.log(productstobuy)
    
    const handleClose = () =>{prop.show[0](false)};
    
    
    const allItems = useOutletContext()[0]

   const handlePlusMinus = (sign,id) => {
   
     const newarray = [...productstobuy]
    
    
    console.log(newarray)
    console.log(id)
    let index=  newarray.findIndex((elem)=>{
       if (elem[0].props.id===id) {return true;}
      })
     
     if (sign === "+") {
       newarray[index][1] = newarray[index][1]+1
     } else if ((newarray[index][1]-1) >= 1) {
      newarray[index][1] = newarray[index][1]-1
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

    useEffect(()=>{
      productstobuy.forEach((elem)=>
      {
        console.log(+elem[1])
        console.log(+elem[0].props.price)
  
       totalprice= totalprice+ (+elem[1])*(+elem[0].props.price)
             console.log(totalprice)})
       setTotal(totalprice)
    })

    
    





    return (
        <Offcanvas id="shoppingcart"  show={prop.show[1]} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body as={Stack} gap={5}>
        {productstobuy.length>0? productstobuy.map((product)=>{
               
                return(
                <div style={{display:"flex",gap:"0.5rem"}} className="product " id={product[0].props.id}>
                  <div >
                 <Image width="200px" height="auto" src={require(""+ product[0].props.img)}/>
                  </div>
                  
                    <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between",width:"100px"}}>
                      <h6>{product[0].props.name}</h6>
                      <div style={{display:"flex"}}>
                      <button style={{width:"25%"}} id={product[0].props.id} onClick={()=>{handlePlusMinus("-",product[0].props.id)}}>-</button>
                      <input  style={{width:"50%"}} type="number" value={product[1]} min="1"/>
                      <button style={{width:"25%"}} id={product[0].props.id} onClick={()=>{handlePlusMinus("+",product[0].props.id)}}>+</button>
                      </div>
                    </div>
                    
                    <div>
                    {(+product[1])*(+product[0].props.price)}$
                    </div>
                    
                </div>)
            

        }):null}
        <div>Total: {total}</div>
        </Offcanvas.Body>
        </Offcanvas>
            
         
        
        
    );




}


export {ShoppingCart}