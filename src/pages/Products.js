import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Products = () => {
  const [products, setProducts] = useState([])
  const traerProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products")
      let datos = response.data
      setProducts(datos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    traerProducts()
  }, []) 

  return (
      <div className="container">
        {products.map(product => (
          <Card key={product.id} product={product}/>
        )) }
      </div>    
  )
}

export default Products