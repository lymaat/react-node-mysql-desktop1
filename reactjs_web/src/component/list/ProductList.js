// rfce : react function component export
import React, { useEffect, useState } from 'react';
import {Button, Rate} from "antd"
import {AiFillHeart} from "react-icons/ai"

// how to add prop in React component
function ProductList(props) { // create function component
  const [cart, setCart] = useState([]);
  const [product_id, setProduct_id] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    // You can implement the logic to add this product to the cart in the parent component.
    // Pass the product data to the parent component's function.
    props.onAddToCart({
      product_id: props.product_id,
      name: props.name,
      price: props.price,
      description: props.description,
      image: props.image,
      quantity: props.quantity,
    });
  };

 
  return (
    <div
      style={{
        padding:20,
        backgroundColor : '#f9f9f9',
        marginTop:10
      }}  
    >
      <img
        src={"http://localhost:7882/image_path/ecm_g2/" + props.image}
        width={"100%"}
      />
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{fontSize:18}}><b>{props.name}</b></div>
        <AiFillHeart style={{fontSize:24}}/>
      </div>
      
      <div style={{fontWeight:'bold'}}>{props.price}</div>
      <div style={{display:'flex',justifyContent:'space-between'}} >
      <div >{props.description}</div>
      <div >{props.quantity}</div>
      {/* <div >{props.product_id}</div> */}

      
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:20 }}>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
      
    </div>
  )
}

export default ProductList
