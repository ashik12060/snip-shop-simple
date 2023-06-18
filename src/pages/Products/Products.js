import React, { useEffect, useState } from 'react'

const Products = () => {
    const [product, setProduct] = useState({});
    
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>{
          setProduct(data);
          console.log(data);
        });
    },[])
  return (
    <div>Products: {product.length}</div>
  )
}

export default Products