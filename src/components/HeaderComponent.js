import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar className="navbar" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><span className="color-change">Trading Service</span> Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink activeclassName="active" 
                            exact to='/'  className="navbar-brand" 
                            activeStyle={{color: "gray" }}>Home</NavLink>
                    <NavLink activeclassName="active" 
                            exact to="/CompanyManager" className="navbar-brand" 
                            activeStyle={{color: "gray" }}>Manager</NavLink>
                    <NavLink activeclassName="active" 
                            exact to="/Investor" className="navbar-brand" 
                            activeStyle={{color: "gray" }}>Investor</NavLink>        
                    </Nav>
                    <div className="logins">
                        <Nav>
                        <NavLink activeclassName="active" exact to='/MyProfile'  
                        className="navbar-brand" activeStyle={{color: "gray" }}>My Profile </NavLink>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default HeaderComponent;