import React from 'react'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


import b_logo from '../resources/images/bomberos_logo.png'
export default function Profile() {
  return (
    <Card className='mt-4 '>
        <Card.Body>
        <Card.Title>Closest Fire Department</Card.Title>
            <div className='d-flex align-items-center'>
                <img
                src={b_logo}
                className='img-thumbnail rounded-circle '
                alt='...'
                style={{ maxHeight: '4rem' }}
                /> 
                <p className='m-0 ms-3'>Unidad Municipal de Protección Civil de Bomberos de Zapotlan</p>
                
            </div>
            <p className=' mt-3 ms-0'> <i class="fa-solid fa-map-location-dot me-2"></i>  Av. Cristóbal Colón 62 Centro, Ciudad Guzmán, Jalisco. C.P. 49000 </p>
            <p className=' mt-3'> <i class="fa-solid fa-phone me-2"></i>   341 575 2500 </p>
        </Card.Body>
    </Card>
  )
}
