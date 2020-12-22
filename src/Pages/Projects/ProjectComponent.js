import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
  Fade,
  Hidden,
  Paper,
  Collapse,
  IconButton,
  Grid
} from '@material-ui/core';
import './Projects.css'
import clsx from 'clsx'
import { blue, indigo } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: 'rgba(54, 57, 63, 0.5)',
    color: 'white',
    margin: '2vh 2vw',
    cursor: 'pointer'
  },
  sourceButton: {
    color: 'yellow'
  },
  demoButton: {
    color: 'pink',
    '&:disabled': {
      color: 'white !important',
      opacity: 0.5,
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.93
  },
  paper: {
    backgroundColor: indigo[50],
    color: theme.palette.getContrastText(indigo[50]),
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '60vw',
    maxHeight: '80vh',
    overflow: 'scroll',
  },
  expand: {
    textAlign: 'center',
    transform: 'rotate(0deg)',
    margin: 'auto',
    '& svg': {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }
  },
  expandOpen: {
    '& svg': {
      transform: 'rotate(180deg)',
    }
  },
  skillsWrapper: {
    display: 'flex',
    marginLeft: 'auto'
  },
  gridItem: {
    textAlign: 'center',
  },
  gridSkill: {
    background: blue[100],
    color: theme.palette.getContrastText(blue[100]),
    margin: '2vh 3vw',
    padding: '2vh 3vw',
  },
  modalDemo: {
    color: blue[800],
  },
  modalSource: {
    color: blue[800],
  }
}))

export default function ProjectComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
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
    if (Name.startsWith(openProject)) {
      let target = document.getElementById(id)
      openProjectModal(target)
    }
  }, [Name, id, openProject])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        className={clsx(classes.card, 'active', 'project-card')}
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
            <Hidden xsDown>
              {previewDescription}
            </Hidden>
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
          <Paper className={classes.paper}>
            <h2 id="transition-modal-title" className='text-center'>
              {Name}
            </h2>
            <div id="transition-modal-description">
              {Description}
            </div>
            <br />
            <Button
              className={classes.modalDemo}
              disabled={Link ? false : true}
              href={Link}
              target="_blank"
            >
              Demo
            </Button>
            <Button
              className={classes.modalSource}
              href={Repository}
              target="_blank"
            >
              Source
            </Button>
            <br />
            <div className={classes.skillsWrapper}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
                Skills used
                <ExpandMoreIcon />
              </IconButton>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Grid
                container
                justify='center'
              >
                {Tools.map((tool, index) => (
                  <Grid item className={classes.gridItem} lg={4} sm={6} xs={12}>
                    <Paper className={classes.gridSkill} elevation={3}>
                      <h5>{tool}</h5>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </Paper>
        </Fade>
      </Modal>
    </>
  )
}

