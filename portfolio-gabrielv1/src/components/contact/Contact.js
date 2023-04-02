import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k4flyeu', 
        'template_hvst8ml',
        e.target,
        'v9HggiIQF-0WWEG3o'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.log(error.text)
          alert("An error occurred, please try again later.")
        }
      );

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className='contact-container'>

      <h1>Contact</h1>

      <Form className='contact-form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="Full name" 
            name='name' 
            value={name} 
            onChange={ (e) => setName(e.target.value) }
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email" 
            name='email'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            required
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as='textarea'
            rows={5}
            placeholder='Enter message'
            name='message' 
            value={message}
            onChange={ (e) => setMessage(e.target.value) }
            required
            />
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