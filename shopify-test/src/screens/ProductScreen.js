import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../products'
import CartDrawer from '../CartDrawer'


const ProductScreen = () => {
  const {id} = useParams()
  const product = products.find(product => product._id === id)
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Return
      </Link>
      <Row>
        <Col md = {6}>
          <Image src={product.image} fluid></Image>
        </Col>
        <Col md = {3}>
          <ListGroup variant='flush'>
            <ListGroup.Item><h3 align='center'>{product.name}</h3></ListGroup.Item>
            <ListGroup.Item><h3 align='center'>Price: ${product.price}</h3></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md = {3}>
          <Card>
            <ListGroup>
              <CartDrawer />
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen