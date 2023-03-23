import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>

      <h1>Contact</h1>

      <Form className='contact-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="message" placeholder="Message" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button className='contact-btn' variant="dark" type="submit" size='lg'>
            Submit
          </Button>      
        </div>

      </Form>

    </div>
  )
}

export default Contact