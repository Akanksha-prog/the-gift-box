import * as React from "react"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    return (
        <div>
            <div className="Navbar">
            <h3>LOGO</h3>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="./App.js">Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#category">Category</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#testimonial">Testimonial</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#customize">Customize</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#contact">Contact</a></MenuItem>
      </Menu>
      </div>
    </div>
    )
}

export default Navigation
