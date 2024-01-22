import React, {useState} from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CSSTransition from "react-transition-group/CSSTransition";

function Card(props) {
    const [isCheck, setCheck] = useState(false);

    function handleCheck(event){
        setCheck(true);
        event.preventDefault();
    }

    function handleDelete(){
        setCheck(false);
        props.onDelete(props.id);
        
    }

    function handleNext(){
        setCheck(false);
        props.onNext();
        
    }

    return <div className="card">
        <h1 className="word">{props.wordToLearn}</h1>
        
        <CSSTransition
            in={isCheck}
            timeout={{enter: 3000, exit:0}}
            classNames="fade"
            unmountOnExit
        >
        <p>{props.definition}</p>
        </CSSTransition>
        
        <div className="cardButtons">
            <Button onClick={handleCheck} aria-label="Check"><CheckIcon /></Button>
            <Button onClick={handleDelete} aria-label="Delete"><DeleteOutlineIcon /></Button>
            <Button onClick={handleNext} aria-label="Next" ><ArrowForwardIosIcon /></Button>
        </div>
    </div>}

export default Card;

