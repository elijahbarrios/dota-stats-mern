import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import { NavDropdown } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav"

const NavComponent = () => {
  return (
   <Navbar expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>

            <NavDropdown menuVariant="dark" title="Qualifiers" id="basic-nav-dropdown">
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/na'>North America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/sa'>South America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/weu'>Western Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/eeu'>Eastern Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/cn'>China</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='quals/sea'>Southeast Asia</Nav.Link>
               </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant="dark" title="Division I" id="basic-nav-dropdown">
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/na'>North America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/sa'>South America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/weu'>Western Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/eeu'>Eastern Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/cn'>China</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div1/sea'>Southeast Asia</Nav.Link>
               </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant="dark" title="Division II" id="basic-nav-dropdown">
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/na' disabled>North America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/sa' disabled>South America</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/weu' disabled>Western Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/eeu' disabled>Eastern Europe</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/cn' disabled>China</Nav.Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                  <Nav.Link as={Link} to='div2/sea' disabled>Southeast Asia</Nav.Link>
               </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="justify-content-end" as={Link} to="/about">About</Nav.Link>
         </Nav>
      </Navbar.Collapse>
   </Navbar>
  )
}

export default NavComponent
