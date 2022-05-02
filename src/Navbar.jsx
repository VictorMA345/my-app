import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Container,Button } from "@mui/material";
import logo from "./logo.png"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
function Navbar(){


    return(
        <Box sx={{ flexGrow: 1}}>
            
        <AppBar style={{ background: 'white' }}  position="static" color="primary" >

          <Toolbar >
            
          <Link to="/">
            <Button>
            <img src = {logo}/>
            </Button>
            </Link>
            <Typography variant="h6" 
            style = 
            {{
            color :"black",
            marginLeft:"10px",
            fontWeight: "bold"
            }}
            component="div" 
            sx={{ flexGrow: 1 }}>
              A-Tech
            </Typography>

            <Container style={{marginLeft: "800px"}}>

            <Link to="/cart">
            <Button
              size="large"
              edge="false"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{
                maxWidth: "50px",
                maxHeight: "50px",
                minWidth: "50px",
                minHeight: "50px",
                color: "white",
                background: "black",
                marginLeft: "95%"
              }}>
               <ShoppingBagIcon /> 
            
              
            </Button>
            </Link>
            </Container>
          </Toolbar>
        </AppBar>
        
      </Box>
    );
}
export default Navbar;