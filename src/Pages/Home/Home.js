import React from 'react';
import {
  Row,
  Col,
  Container
} from 'reactstrap'
import {
  AboutMessage,
  PageIcons
} from './HomeComponents'
import './Home.css'

export default function Home() {
  return (
    <div className='page-background' >
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'> Hi, I'm Jerry </h1>
            {/* Animate a picture of myself */}
            {AboutMessage}
          </Col>
        </Row>
        <Row>
          <Col>
            <PageIcons />
          </Col>
        </Row>
      </Container>
    </div>
  );
}