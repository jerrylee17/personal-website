import React from 'react';
import NavBar from './NavBar'

export default function NavBarWrapper({
  component: Component,
  ...props
}) {
  return (
    <div>
      <NavBar/>
      <Component {...props}/>
    </div>
  )
}