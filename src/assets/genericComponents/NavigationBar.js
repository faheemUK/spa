import React from "react";
import {
    Navbar,
} from "react-bootstrap";
export function NavigationBar() {
    return (


        <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Navbar>

    )
}
