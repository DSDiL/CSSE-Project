import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaCalendarDay,
    FaRegFileAlt,
    FaRegSun
} from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import "../styles/styles.css"

function Sidebar({children}) {

    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/manage",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FaRegChartBar/>
        },
        {
            path:"/addtimetable",
            name:"Create Time Table",
            icon:<FaCalendarDay/>
        },
        {
            path:"/product",
            name:"Time Reports",
            icon:<FaRegFileAlt/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaRegSun/>
        }
    ]
    
    return (
        <div>
            <header>
                <Navbar bg='dark' expand='lg' collapseOnSelect>
                    <Container>
                        <LinkContainer to='/addtimetable'>
                            <Navbar.Brand className='title'>Travel Guide</Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ms-auto'>
                                <Nav.Link>
                                    <i className='fas fa-user'>SIGN IN</i>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>              
                    </Container>
                </Navbar>
            </header>
            <div className='side'>
                <div style={{width: isOpen ? "350px" : "50px"}} className="sidebar">
                    <div className="top_section">
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <div>
                                <LinkContainer to={item.path} key={index} className="link" activeclassname="active">
                                    <div>
                                        <div className="icon">{item.icon}</div>
                                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                    </div>
                                </LinkContainer>
                            </div>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Sidebar;