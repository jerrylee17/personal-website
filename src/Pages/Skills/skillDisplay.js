import React from 'react';
import './Skills.css'

// import anime from 'animejs/lib/anime.es.js';

export default function SkillDisplay(props) {
  const {
    skill
  } = props;
  return (
    <>
      {skill ?
        <>
          <br />
          <h3 className='text-center'>{skill.Name}</h3>
          Type: {skill.Type} 
          <br /> < br />
          {skill.Experience ?
            <>Experience: {skill.Experience}</>
            : ''
          }
          <br /> < br />
          {skill.Projects ?
            skill.Projects.map(
              (Project, index) => (
              Project
            ))
            : ''
          }
        </>
        : ''
      }

      {/* Hi I'm a display */}
    </>
  )
}