import React from 'react'
import { Container,Card,Button } from 'react-bootstrap'
import second from '../resources/images/image1.jpeg'
function Help() {
  return (
    <Container className='d-flex justify-content-center mt-5'>
        <Card className="bg-dark text-white text">
            <Card.Img src={second} alt="Card image" style={{ maxHeight: '250px' }}/>
            <Card.ImgOverlay>
                <Card.Title>Request Help</Card.Title>
                <Card.Text className='fs-5'>
                We will inmediately contact the nearest help in your area. 
                </Card.Text>
                <a href={`/camera/help`} className='d-flex justify-content-start text-decoration-none'>
                    <Button variant="outline-danger">Request Help</Button>{' '}
                </a>
                
            </Card.ImgOverlay>
        </Card>
    </Container>
    
  )
}

export default Help