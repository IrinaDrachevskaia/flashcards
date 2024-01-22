import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Chip from "@mui/material/Chip";

function Edit(props){
    const [editWord, setEditWord] = useState(props.word);

    function handleCancel(){
        props.onCancel();
    }

    function hadleSubmit(){
        props.toEdit(editWord);
        props.onCancel();
    }

    function handleChange(event){
        const { name, value } = event.target;
        setEditWord ((prevWord) => {
            return {
                ...prevWord,
                [name]: value,
              };
        })
    }


    return <div className="edit">
    <h1>Edit Card</h1>
    <form className="edit-form">
    <label>You word</label>
    <input
        name="word"
        onChange={handleChange}
        value={editWord.word}
        placeholder={editWord.word}
      />
    <label>Word definition</label>
    <textarea
      name="definition"
      onChange={handleChange}
      value={editWord.definition}
      placeholder={editWord.definition}
      rows="5"
    />
    <div className="chip-buttons span">
            <Chip
                label="Cancel"
                onClick={handleCancel}
                deleteIcon={<CancelIcon />}
                color="primary" 
            />
            <Chip
                label="Submit"
                onClick={hadleSubmit}
                deleteIcon={<CheckCircleOutlineIcon />}
                variant="outlined"
                color="primary" 
            />
            
        </div>
    
    
  </form>
    </div>
}

export default Edit;
