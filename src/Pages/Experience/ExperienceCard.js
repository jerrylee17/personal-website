import React from 'react'
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 'auto',
    backgroundColor: 'rgba(54, 57, 63, 0.5)',
    color: 'white',
    margin: '2vh 2vw',
    padding: '1vh 2vw 2vh 1vw',
    boxShadow: '0 0 10px 2px white',
    '&:hover': {
      transform: 'scale(1.005)',
      boxShadow: '0 0 20px 2px red',
      background: 'rgba(0, 0, 0, 0)',
      transitionDuration: '500ms',
      transitionProperty: 'transform, boxShadow',
    },
  },
  cardSubHeader: {
    color: 'white'
  }
}))


export default function ExperienceCard(props) {
  const {
    Company,
    Title,
    Location,
    Dates,
    Bullets
  } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          title={`${Title} at ${Company}`}
          subheader={Dates}
          subheaderTypographyProps={{ color: 'white' }}
        />
        <CardContent>
          {Bullets.map((text, index) => (
            <Typography>
              {`● ${text}`}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </>
  )
}
