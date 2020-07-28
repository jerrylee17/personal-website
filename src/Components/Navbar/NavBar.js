import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './NavBar.css'
const routes = require('../../Routes.json');


export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">Jerry Lee</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {routes.Routes.map((object, index) => {
              if (object.Navbar === "Yes") {
                return (
                  <NavItem key={index}>
                    <NavLink href={object.Route}>{object.Name}</NavLink>
                  </NavItem>
                )
              }
              return true
            })}
          </Nav>
          <NavbarText>
            <NavLink href='./JerryLeeResume.pdf' download>
              Download Current Resume
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
