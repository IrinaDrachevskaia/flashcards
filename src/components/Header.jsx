import React from "react";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import MenuComponent from "./Menu";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";



function Heading(){
    const navigate  = useNavigate();

    function handleMenuClick(path) {
        navigate(path);
      }
    
    return <div className="heading">
        <Button variant="text" onClick={() => handleMenuClick("/")} className="home-button"><h2><LiveHelpOutlinedIcon /> Flashcards</h2></Button>
        
        <MenuComponent />
    </div>

}

export default Heading;