import React from 'react';
import './Skills.css'

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
            <> Projects: 
              {skill.Projects.map(
                (Project) => (
                  Project
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
