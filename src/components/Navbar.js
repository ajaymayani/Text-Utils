import { Navbar, Nav, Container } from 'react-bootstrap';
import React,{useState} from 'react';

export default function Navbar1(props) {

    return (
        <div>
            <Navbar bg={props.mode} expand="lg" variant={props.mode}>
                <Container>
                    <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-light">
                            <Nav.Link href="/" className='active'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'} Mode Enable</label>
                    </div>
                </Container>

            </Navbar>
        </div>
    )
}
