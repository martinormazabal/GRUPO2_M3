import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function NavigationBar() {

    return (
            <div className="container-fluid p-2">
                <Navbar className="p-2" fixed="top" bg="light" variant="light">  
                        <Navbar.Brand>Diplomados</Navbar.Brand>

                        <Nav className="mr-auto">
                            <Nav.Link href="#">Item 1</Nav.Link>
                            <Nav.Link href="#">Item 2</Nav.Link>
                            <Nav.Link href="#">Item 3</Nav.Link>
                            <Nav.Link href="#">Item 4</Nav.Link>
                        </Nav>
                </Navbar>
           </div>

    )
}