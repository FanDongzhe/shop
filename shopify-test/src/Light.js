import React from 'react'
import { Carousel } from 'antd'
import { Image } from 'react-bootstrap'

const Light = () => {
  return (
    <Carousel autoplay autoplaySpeed={1000} style={{width:500, height: 500}}>
    <div>
      <img src='/shoe1.jpg' style={{width:500, height: 500}}></img>
    </div>
    <div>
        <img src='/shoe2.jpg' style={{width:500, height: 500}}></img>
    </div>
    <div>
        <img src='/shoe3.jpg' style={{width:500, height: 500}}></img>
    </div>
    <div>
        <img src='/shoe4.jpg' style={{width:500, height: 500}}></img>
    </div>
  </Carousel>
  )
}

export default Light