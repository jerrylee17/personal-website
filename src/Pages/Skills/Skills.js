import React, { useState } from 'react';
import SkillSpinner from './SkillSpinner'
import SkillDisplay from './skillDisplay'
import './Skills.css'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const skills = require('./Skills.json')
const drawerWidth = '30vw';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor: '#36393f',
    color: 'white',
    top: '10vh',
    height: '80vh',
    borderRadius: '10px',
    padding: '1vh 2vw',
    marginRight: '3vw',
    boxShadow: '0 0 20px 4px rgba(255, 0, 255, 0.7)'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    justifyContent: 'flex-start',
  },
}));

export default function Skills() {
  const classes = useStyles();
  const [displayedSkill, setDisplayedSkill] = useState({})
  const [open, setOpen] = useState(false)
  let spinnerProps = {
    skills: skills,
    setDisplayedSkill: (skill) => {
      if (skill === displayedSkill) {
        setOpen(false)
        setTimeout(() => {
          setDisplayedSkill({})
        }, 200)
      } else {
        setDisplayedSkill(skill)
        setOpen(true)
      }
    }
  }
  let displayProps = {
    skill: displayedSkill
  }
  return (
    <div className='page-background'>
      <div
        className={`${displayedSkill.Name ? 'left-component'
        : 'centered-component'}`}
      >
        <SkillSpinner {...spinnerProps} />
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SkillDisplay {...displayProps}/>
      </Drawer>
    </div>
  );
}

