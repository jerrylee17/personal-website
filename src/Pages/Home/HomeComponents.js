import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export function PageIcons() {
  return (
    <div className='text-center'>
      <LinkedInIcon
        fontSize='large'
        onClick={() => {
          window.open('https://www.linkedin.com/in/jerry-lee1999/', '_blank')
        }}
        style={{
          cursor: 'pointer'
        }}
      />{' '}
      <GitHubIcon
        fontSize='large'
        onClick={() => {
          window.open('https://github.com/jerrylee17', '_blank')
        }}
        style={{
          cursor: 'pointer'
        }}
      />
    </div>
  )
}


export const AboutMessage = `
I am currently a third year Computer Engineering Major at 
San Jose State University, planning to graduate in December of 2020. 
I am seeking a full time job for 2021.
`

export const SkillsMessage = `
Click me to see Skills!
`

export const ProjectsMessage = `
Click me to see Projects!
`

