import React from 'react'
import Light from '../Light'
import {Row, Col} from 'react-bootstrap'
import Slider from '../Hscroll'

const ThankScreen = () => {
  return (
    <>
        <Row >
            <Col>Thank You</Col>
            <Col>
              <Slider />
            </Col>
        </Row>
    </>
  )
}

export default ThankScreen