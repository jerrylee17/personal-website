import React from 'react';
import {
  Row,
  Col,
  Container
} from 'reactstrap'
import {
  AboutMessage
} from './HomeComponents'
import './Home.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

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
            <div className='text-center'>
              <LinkedInIcon
                fontSize='large'
                onClick={() => {
                  window.open('https://www.linkedin.com/in/jerry-lee1999/', '_blank')
                }}
                style={{
                  // float: 'left',
                  cursor: 'pointer'
                }}
              />{' '}
              <GitHubIcon
                fontSize='large'
                onClick={() => {
                  window.open('https://github.com/jerrylee17', '_blank')
                }}
                style={{
                  // float: 'right',
                  cursor: 'pointer'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}