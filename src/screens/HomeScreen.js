import React from 'react'
import { Row,Col,Toast } from 'react-bootstrap'

import Product from '../components/Product';
import Location from '../components/Location';
import Stadistics from '../components/Stadistics';
import Profile from '../components/Profile';
import Help from '../components/Help';


import img1 from '../resources/images/cam1.png'
import img2 from '../resources/images/cam2.png'
import img3 from '../resources/images/cam3.png' 
function HomeScreen() {
  return (
    <div className='px-4 p-md-0 '>
        <h1 className='fw-bolder mt-3'>Camera Hub</h1>
        <h3 className='fs-4'> Feel protected with us.</h3>
        {/* <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast> */}
        <Row className='d-flex justify-content-center mb-4'>
            <Col sm={12} md={6} lg={4} xl={4}>
                <Product image = {img1} name = {'Exterior Camara 1'} state = {'No fire detected'} id={1} num_pers={0}/>
            </Col> 
            <Col sm={12} md={6} lg={4} xl={4}>
                <Product image = {img2} name = {'Exterior Camara 2'} state = {'No fire detected'} id={2} num_pers={1}/>
            </Col> 
            <Col sm={12} md={6} lg={4} xl={4}>
                <Product image = {img3} name = {'Interior Camera 3'} state = {'No fire detected'}id={3} num_pers={2}/>
            </Col>   
        </Row>
        <h2 className='fw-bolder mt-3'>Info</h2>
        <Row className='align-items-center'>
            <Col sm={12} md={6} lg={8} xl={8}>
                <Location/>
            </Col> 
            <Col sm={12} md={6} lg={4} xl={4} className='mt-3 mt-md-0'>
                <Stadistics/>
                <Profile/>
            </Col> 
        </Row>
        <h2 className='fw-bolder mt-3'>Need Help?</h2>
        <Help/>
    </div>
  )
}

export default HomeScreen