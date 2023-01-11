import './Header.css';
import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import Row from "./Row";
const sdIcon = require('../assets/icon-thin.png');

export default function Header() {
  const [page, setPage] = React.useState('about');
  
  return (
    <AppBar position='fixed' component='nav'>
      <Toolbar className='nav'>
        {/* make these navigate to their corresponding pages on click */}
        <Row className="toolbar">
          <Row className='nameRow'>
            <img src={sdIcon} className="headerIcon"/>
            <span className='name'>Sarah Delaney</span>
          </Row>
          <Row>
            <Button onClick={()=>setPage('about')}>About Me</Button>
            <Button onClick={()=>setPage('resume')}>Resume</Button>
            <Button onClick={()=>setPage('contact')}>Contact</Button>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>)
}