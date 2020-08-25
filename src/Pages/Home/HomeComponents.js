import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

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
      />{' '}
      <PictureAsPdfIcon
        fontSize='large'
        onClick={() => {
          window.open('./JerryLeeResume.pdf', '_blank')
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

export const HomeMessages = [
  {
    'Text': 'My skills!',
    'Redirect': '/skills'
  },
  {
    'Text': 'My Projects!',
    'Redirect': '/projects'
  },
  {
    'Text': 'My experience! (Coming soon)',
    'Path': '/'
  },
  {
    'Text': 'My best project!',
    'Redirect': 'https://sce.engr.sjsu.edu'
  },
]

