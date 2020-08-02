import React from 'react';
import Header from '../../Components/Header/Header'
import { ProjectsData } from './Projects-data.js'
import ProjectComponent from './ProjectComponent'
const queryString = require('query-string')

export default function Projects(props) {
  const headerProps = {
    title: 'Projects'
  }
  const query = queryString.parse(props.location.search)
  return (
    <div className='page-background'>
      <Header {...headerProps} />
      <section className='grid'>
        {
          ProjectsData.Projects.map((Project, index) => (
            <ProjectComponent
              {...Project}
              id={`Project-${index}`}
              key={index}
              openProject={query.openProject}
            />
          ))
        }
      </section>
    </div>
  );
}

