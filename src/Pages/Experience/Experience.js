import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { ExperienceData } from './Experience-data'
import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center'
  },
  gridWrapper: {
    paddingTop: '20px',
    justifyContent: 'flex-start'
  },
  gridItem: {
    padding: '4vh 4vh',
  }
}))

export default function Experience() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Experience</h1>
      <Grid
        container
        justify='center'
      >
        {ExperienceData.map((object, index) => (
          <Grid item className={classes.gridItem} sm={12} lg={12}>
            <ExperienceCard {...object} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
