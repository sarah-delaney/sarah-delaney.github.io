import './Header.css';
import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import Row from "./Row";
import { NavLink } from 'react-router-dom';
const sdIcon = require('../assets/icon-thin.png');

export default function Header() {
  // const [page, setPage] = React.useState<string | undefined>();
  // console.log(page);
  return (
    <AppBar position='fixed' component='nav'>
      <Toolbar className='nav'>
        {/* make these navigate to their corresponding pages on click */}
        <Row className="toolbar">
          <Row className='nameRow'>
            <img src={sdIcon} className="headerIcon"/>
            <span className='name'>Sarah Delaney</span>
          </Row>
          <Row className='links'>
            <NavLink to="about">About Me</NavLink>
            <NavLink to="resume">Resume</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>)
}