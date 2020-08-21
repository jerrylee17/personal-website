import React from 'react';
import './Skills.css'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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

export default function SkillDisplay(props) {
  const {
    skill
  } = props;
  const classes = useStyles()
  const history = useHistory()
  const routeChange = (path) => {
    history.push(path)
  }

  return (
    <>
      {skill ?
        <>
          <br />
          <h3 className='text-center'>{skill.Name}</h3>
          {/* Type: {skill.Type} */}
          {/* <br /> < br /> */}
          {skill.Experience ?
            <>Experience: {skill.Experience}</>
            : ''
          }
          <br /> < br />
          {skill.Projects ?
            <>
              {skill.Projects.map(
                (Project, index) => (
                  <>
                    <Card
                      className={classes.card}
                      key={index}
                      onClick={() => { 
                        routeChange(`/projects?openProject=${Project.split(' ').slice(0,1)}`)
                      }}
                    >
                      <CardContent
                        className={classes.cardContent}>
                        {Project}
                      </CardContent>
                    </Card>
                  </>
                ))}
            </>
            : ''
          }
        </>
        : ''
      }
    </>
  )
}
