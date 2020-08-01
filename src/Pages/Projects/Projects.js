import React from 'react';
import Header from '../../Components/Header/Header'
import { ProjectsData } from './Projects-data.js'
import ProjectComponent from './ProjectComponent'


export default function Projects() {
  const headerProps = {
    title: 'Projects'
  }
  return (
    <div className='page-background'>
      <Header {...headerProps} />
      <section className='grid'>
        {
          ProjectsData.Projects.map((Project, index) => (
            <ProjectComponent {...Project} id={`Project-${index}`} />
          ))
        }
      </section>
    </div>
  );
}

