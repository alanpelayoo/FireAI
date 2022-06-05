import React from 'react'
import { Card } from 'react-bootstrap'
import Map from '../components/Map';
function Location() {
  return (
    <Card >
        <Card.Body>
            <Card.Title>Location</Card.Title>
            <Map/>
        </Card.Body>
    </Card>
    
  )
}

export default Location