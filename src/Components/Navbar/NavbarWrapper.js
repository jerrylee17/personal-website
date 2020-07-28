import React from 'react';
import NavBar from './NavBar'

export default function NavBarWrapper(props) {
  const {
    component: Component
  } = props
  return (
    <div>
      <NavBar />
      <Component />
    </div>
  )
}