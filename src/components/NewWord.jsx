import React, {useState} from "react";
import { Zoom } from '@mui/material';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

function NewWord(props){
    const [newWord, setNewWord] = useState({word: "", definition: ""})
    const [isClicked, setClicked] = useState(false);

    function handleClick(event){
        setClicked((prevValue) => {return !prevValue})
        event.preventDefault();
    }

    function handleChange(event){
        const { name, value } = event.target;
        setNewWord ((prevWord) => {
            return {
                ...prevWord,
                [name]: value,
              };
        })
    }

    function submitWord(event){
        props.onAdd(newWord);
        setNewWord({word: "", definition: ""});
        event.preventDefault();
    }

    return <div><form className="new-word">
    <input
        name="word"
        onChange={handleChange}
        onClick={handleClick}
        value={newWord.word}
        placeholder="Enter a new word/sentence"
      />

    {isClicked && <textarea
      name="definition"
      onChange={handleChange}
      
      value={newWord.definition}
      placeholder="Enter the definition"
      rows="3"
    />}
    
    <Zoom in={isClicked}>
      <Fab onClick={submitWord}>
        <AddIcon />
      </Fab>
    </Zoom>
  </form>
</div>

}

export default NewWord;