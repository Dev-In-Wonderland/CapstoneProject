import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'orange'}}>
                <FontAwesomeIcon icon ={faVideo}/> Wonderland
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>

                {/* <NavLink variant="outline-info" path='/register'element={<Register/>}>Register</NavLink>
          <NavLink className="me-2" variant="outline-info" path='/login'element={<Login/>}>Login</NavLink> */}



                {/* <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button> */}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
