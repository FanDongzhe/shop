import React from 'react'
import { Carousel } from 'antd'
import { Image } from 'react-bootstrap'

const Light = () => {
  return (
    <Carousel autoplay autoplaySpeed={1000}>
    <div>
      <img src='/shoe1.jpg'></img>
    </div>
    <div>
        <img src='/shoe2.jpg'></img>
    </div>
    <div>
        <img src='/shoe3.jpg'></img>
    </div>
    <div>
        <img src='/shoe4.jpg'></img>
    </div>
  </Carousel>
  )
}

export default Light