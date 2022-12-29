import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { ChangeEvent } from "react";

export default function Header() {
  const [page, setPage] = React.useState('about');
  
  return (
    <AppBar position='fixed' component='nav'>
      <Toolbar>
        {/* make these navigate to their corresponding pages on click */}
        <Button onClick={()=>setPage('about')}>About Me</Button>
        <Button onClick={()=>setPage('resume')}>Resume</Button>
        <Button onClick={()=>setPage('contact')}>Contact</Button>
      </Toolbar>
    </AppBar>)
}