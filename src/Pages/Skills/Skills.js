import React, { useState } from 'react';
import Header from '../../Components/Header/Header'
import SkillSpinner from './SkillSpinner'
import './Skills.css'

const skills = require('./Skills.json')

export default function Skills() {
  const [displayedSkill, setDisplayedSkill] = useState({})
  const headerProps = {
    title: 'Skills'
  }
  let spinnerProps = {
    skills: skills,
    selectedSkill: (skill) => {
      setDisplayedSkill(skill)
    }
  }
  let displayProps = {
    skills: skills,
    displayedSkill: displayedSkill
  }
  return (
    <div className='page-background'>
      <Header {...headerProps} />
      <div className={`${displayedSkill.Name ? 'left-component': ''}`}>
        <SkillSpinner {...spinnerProps} />
      </div>
      <div className='right-component'>
        <skillDisplay {...displayProps}/>
      </div>
    </div>
  );
}

