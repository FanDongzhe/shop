import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Commodity from './Commodity';

const CartDrawer = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showDrawer}>
          Add to Cart
        </Button>
        <Drawer size='large' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
          <Row >
            <Col md={5}>
              <Commodity />
            </Col>
            <Col md={5}>
              <Link className='btn btn-dark my-3' to='/success'>
                Check out
              </Link>
            </Col>
          </Row>
        </Drawer>
      </>
    );
}

export default CartDrawer