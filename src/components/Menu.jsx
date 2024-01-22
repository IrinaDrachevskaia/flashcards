import React, {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";


function MenuComponent(){
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate  = useNavigate();

    function handleClick(event){
        setAnchorEl(event.currentTarget);
    }

    function handleClose(){
        setAnchorEl(null);
    }

    function handleMenuClick(path) {
      navigate(path);
      handleClose();
    }

    return (<div> <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    <MenuIcon />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}    
      sx={{
        "& .MuiMenu-paper": {
          backgroundColor: "#bdcffc",
          width: "150px"
        },
      }}
    >
      <MenuItem onClick={() => handleMenuClick("/")} className="menuBackground">Home</MenuItem>
      <MenuItem onClick={() => handleMenuClick("/practice")} className="menuBackground" >Practice</MenuItem>
      <MenuItem onClick={() => handleMenuClick("/dictionary")} className="menuBackground" >Dictionary</MenuItem>

    </Menu></div>
    )
}

export default MenuComponent;


