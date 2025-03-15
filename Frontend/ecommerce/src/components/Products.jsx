import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Products({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`product/${product.id}`}>
        <Card.Img src={`http://127.0.0.1:8000${product.image}`}  />
        </Link>
        <strong>{product.productname}</strong>
    </Card>
  )
}

export default Products
