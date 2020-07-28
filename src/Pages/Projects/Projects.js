import React from 'react';
import Header from '../../Components/Header/Header'

export default function Projects() {
  const headerProps = {
    title: 'Projects'
  }
  return (
    <div className='page-background'>
      <Header {...headerProps} />
    </div>
  );
}

