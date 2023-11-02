import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
  const {idProduct} = useParams()
  const [product, setProduct] = useState(null)
  const traerProduct = async () => {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${idProduct}`)
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    traerProduct()
  },[]) 

  return (
    <div>
      {product && (
        <div className='detailproduct'>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p><b>Description:</b> {product.description}</p>
          <h2>Price: ${product.price} USD</h2>
          <p><b>Category:</b> {product.category}</p>
        </div>
      )}    
    </div>
  )
}

export default DetailProduct