import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardContent, Typography, CardActions, Button, Modal, Fade } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import './Projects.css'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: '#36393f',
    color: 'white',
    margin: '2vh 2vw',
    cursor: 'pointer'
  },
  sourceButton: {
    color: 'yellow'
  },
  demoButton: {
    color: 'pink'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgba(200,180,255)',
    border: '2px solid #000',
    // filter: 'brightness(0.8)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '60vw'
  },
  buttonAlign: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {

  }
}))

export default function ProjectComponent(props) {
  const classes = useStyles();
  const {
    Name,
    Repository,
    Link,
    Description,
    Tools,
    id,
    openProject
  } = props
  console.log(openProject)
  const [isSelected, setIsSelected] = useState(false)
  const previewDescription = Description.split('.').slice(0, 1).join(' ')
  useEffect(() => {
    if (Name.startsWith(openProject)){
      let target = document.getElementById(id)
      openProjectModal(target)
    }
  }, [Name, id, openProject])

  function closeProjectModal(target) {
    setIsSelected(false)
    target.classList.replace('hidden', 'active')
  }

  function openProjectModal(target) {
    setIsSelected(true)
    target.classList.replace('active', 'hidden')
  }

  function handlePreview(id) {
    let target = document.getElementById(id)
    if (isSelected) {
      closeProjectModal(target)
    } else {
      openProjectModal(target)
    }
  }

  return (
    <>
      <Card
        className={clsx(classes.card, 'active')}
        id={id}
        onClick={() => handlePreview(id)}
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
            {previewDescription}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isSelected}
        onClose={() => handlePreview(id)}
        closeAfterTransition
      >
        <Fade
          in={isSelected}
          timeout={300}
        >
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className='text-center'>{Name}</h2>
            <div id="transition-modal-description">
              {Description}
              <br />
              <br />
              <div className={classes.buttonAlign}>
                {
                  Tools.map((tool, index) => (
                    <Button
                      className={clsx(classes.button, 'toolsButton')}
                      variant='contained'
                      key={index}
                    >
                      {tool}
                    </Button>
                  ))
                }
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

