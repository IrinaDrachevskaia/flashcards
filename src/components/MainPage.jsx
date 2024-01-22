import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage(){
    const navigate  = useNavigate();

    function handleMenuClick(path) {
        navigate(path);
      }
    return <div>
        <Heading />
        <div className="container"><h1>Welcome to FlashCards!</h1>
            <div><h3>We've thrown in a couple of English words by default. Feel free to bin them and toss in any words or phrases in any language you fancy.</h3></div>
            <h2>Learn languages with a breeze and a smile.</h2>
            <div className="mainpage-button"><Button onClick={() => handleMenuClick("/practice")} variant="contained">Start practice</Button></div>
            <div className="mainpage-button"><Button onClick={() => handleMenuClick("/dictionary")} variant="contained">Look at Dictionary</Button></div>
        </div>        
        <Footer />
    </div>
    
    
}

export default MainPage;