import React, { Component } from 'react';
import { render } from 'react-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import './style.css';

const Item = props => {
  return <div 
    className="slider-item" 
    style={{
      ":not(:last-of-type)": {
        marginRight: 12,
      }
    }}
    onClick={props.onClick}>
      {props.children}
    </div>
}


const Slider = props => {
  const containerRef = React.useRef(null)
  const styles = {
    hidescroll: {
      width: '100%',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      overflowX: 'auto',
      paddingBottom: 20,
      marginBottom: -20,
    },
  }

  const goTo = (n) => {
    containerRef.current.scrollLeft = containerRef.current.children[0].children[n-1].offsetLeft
  }

  const goToByElem = (elem) => {
    containerRef.current.scrollLeft = elem.offsetLeft;
  }

  const handleClick = (e) => {
    goToByElem(e.target)
  }
  
  return (
    <div className="slider-wrapper" style={styles.hidescroll}>
      <div className="slider-container" style={styles.container} ref={containerRef}>
        <ul className="slider-list">
          <Item onClick={handleClick}>
            <header>
              <img src='/shoe1.jpg' style={{width:400, height:400}}></img>
            </header>
          </Item>
          <Item onClick={handleClick}><img src='/shoe2.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe3.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe4.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe1.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe2.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe3.jpg' style={{width:400, height:400}}></img></Item>
          <Item onClick={handleClick}><img src='/shoe4.jpg' style={{width:400, height:400}}></img></Item>
        </ul>
      </div>
    </div>
  )

}

export default Slider