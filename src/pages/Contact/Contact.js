  
import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    
    Container,
    Row,
    Col
  } from 'reactstrap'

const Contact = () => {
  return (
    <Container>
      <Row>
      
        <Col xs="12">
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleMessage">Message</Label>
              <Input type="message" name="message" id="exampleMessage" />
            </FormGroup>
            <Button>Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default Contact