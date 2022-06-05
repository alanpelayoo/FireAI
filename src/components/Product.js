import React from 'react'
import { Card,Button } from 'react-bootstrap'

function Product({image, name,state,id,num_pers}) {
  return (
    <Card variant="top" className='my-3 border-1 bg-light'>
        <Card.Img src={image}/>
        <Card.Body className='px-4'>
            <Card.Title>
                <strong className='fs-4'>{name}</strong>
            </Card.Title>
            <Card.Text as="div">
                <div className='my-3'>
                    <p className='fs-5 m-0'> <i class="fa-solid fa-house-fire me-2"></i> Status: <span className='text-success' >{state}</span> </p>
                    <p className='fs-5 m-0'>  <i class="fa-solid fa-person me-2"></i> People detected: {num_pers} </p>
                </div>
            </Card.Text>
            <a href={`/camera/${id}`} className='d-flex justify-content-end text-decoration-none'>
                <Button variant="primary">Go <i className='fas fa-arrow-right ms-1'></i></Button>{' '}
            </a>
            
        </Card.Body>
    </Card>

    
  )
}

export default Product
