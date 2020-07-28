import React from 'react';
import Header from '../../Components/Header/Header'

export default function Contact() {
  const headerProps = {
    title: 'Contact me!'
  }
  return (
    <div className='page-background'>
      <Header {...headerProps} />
    </div>
  );
}

