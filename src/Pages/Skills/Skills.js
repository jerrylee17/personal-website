import React from 'react';
import Header from '../../Components/Header/Header'
// import {
//   Card
// } from 'reactstrap'
import SkillSpinner from './SkillSpinner'

const skills = require('./Skills.json')

export default function Skills() {
  const headerProps = {
    title: 'Skills'
  }
  let spinnerProps = {
    skills: skills
  }
  return (
    <div className='page-background'>
      <Header {...headerProps} />
      {/* {skills.Languages.map(({ Language }, index) => (
        <li>{index}: {Language}</li>
      ))} */}
      <SkillSpinner {...spinnerProps}/>
    </div>
  );
}

