import React from 'react'
import { Card } from 'react-bootstrap'

function Stadistics() {
  return (
    <Card>
        <Card.Body>
            <Card.Title>Data</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">We use our sensing data to predict the risk of forest fire in your area.</Card.Subtitle>
            <Card.Text>
            <p className=' m-0'><i class="fa-solid fa-temperature-arrow-up me-2"></i> Temperature:<span className='text-primary' > 3°C</span></p>
            <p className=' m-0'> <i class="fa-solid fa-droplet me-2"></i> Humidity: <span className='text-primary' > 81% </span></p>
            <p className=' m-0'> <i class="fa-solid fa-wind me-2"></i> Wind: <span className='text-primary' > 13 km/h</span></p>
            <p className='m-0'><i class="fa-solid fa-percent me-2"></i> Risk <span className='text-success' > Low </span></p>
            </Card.Text>
            <Card.Link href="#">Full Data</Card.Link>
            <Card.Link href="#">Know about forest fire data</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default Stadistics