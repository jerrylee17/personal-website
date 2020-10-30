import React from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap'
import {
  AboutMessage,
  PageIcons,
  HomeMessages
} from './HomeComponents'
import './Home.css'
import { Card, makeStyles, CardHeader } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'black',
    boxShadow: '0 0 10px 1px rgba(255,255,255,0.8)',
    color: 'white',
    fontSize: '1rem',
    height: '100px',
    marginBottom: '30px',
    overflow: 'scroll',
    paddingBottom: '0px',
    cursor: 'pointer'
  },
  cardContent: {
    padding: '5px 10px'
  }
}))


export default function Home() {
  const classes = useStyles()
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'> Hi, I'm Jerry </h1>
            {AboutMessage}
          </Col>
        </Row>
        <Row>
          <Col>
            <PageIcons />
          </Col>
        </Row>
        <Row>
          <Col>
            <section id='home-grid'>
              {
                HomeMessages.map((message, index) => (
                  <Card
                    className={clsx(classes.card, 'home-cards')}
                    key={index}
                    onClick={() => {
                      if (message.Redirect.startsWith('/')) {
                        routeChange(message.Redirect)
                      } else {
                        window.open(message.Redirect, '_blank')
                      }
                    }}
                  >
                    <CardHeader
                      title={message.Text}
                    />
                  </Card>
                ))
              }
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}