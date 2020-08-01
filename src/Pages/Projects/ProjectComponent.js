import React from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import './Projects.css'
import anime from 'animejs/lib/anime.es.js'

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: '#36393f',
    color: 'white',
    margin: '2vh 2vw'
  },
  sourceButton: {
    color: 'yellow'
  },
  demoButton: {
    color: 'pink'
  }
}))

export default function ProjectComponent(props) {
  const classes = useStyles();
  const {
    Name,
    Repository,
    Link,
    Description,
    id
    // Tools
  } = props

  function animateobject(animation) {
    anime.remove(animation.targets)
    anime(animation)
  }


  return (
    <>
      <Card 
        className={classes.card}
        id={id}
      >
        <CardHeader
          avatar={
            <Avatar>
              {Name ? Name[0] : ''}
            </Avatar>
          }
          title={Name}
        />
        <CardContent>
          <Typography>
            {Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            className={classes.demoButton} 
            disabled={Link ? false : true}
            href={Link}
            target="_blank"
          >
            Demo
          </Button>
          <Button 
            className={classes.sourceButton}
            href={Repository}
            target="_blank"
          >
            Source
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

