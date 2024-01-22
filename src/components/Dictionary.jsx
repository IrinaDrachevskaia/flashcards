import React, {useState} from "react";
import Heading from "./Header";
import Footer from "./Footer";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Chip from "@mui/material/Chip";
import AddIcon from '@mui/icons-material/Add';
import NewWord from "./NewWord";
import Edit from "./EditCard";

function Dictionary({ allWords, setWords }){
    const [isClicked, setClicked] = useState(false);
    const [isOnEdit, setOnEdit] = useState(false);
    const [wordToEdit, setWordToEdit] = useState({});
    const [idToEdit, setIdToEdit] = useState();


    console.log(allWords);
    function handleDelete(index){
        setWords((prevWords) => {
            return prevWords.filter((word, i) => i !== index);
        });
    }

    function handleEdit(index){
        setOnEdit((prevEdit) => {return !prevEdit});
        setWordToEdit(allWords[index]);
        setIdToEdit(index);
    }

    function handleDeleteAll(){
        setWords([])
    }

    function handleClick(event){
        setClicked((prevValue) => {return !prevValue});
        event.preventDefault();
   
    }

    function addNewWord(newWord) {
        setWords((prevWords) => {
          const updatedWords = [...prevWords, newWord];
          return updatedWords;
        });
    }

    function updateWord(editedWord){
        allWords = allWords.splice(idToEdit, 1, editedWord);
    }


    return <div> 
    <Heading />
    <div className="container-dictionary">
        
        {(allWords.length > 0) ? <h1>Your Dictionary</h1> : <h1>Your Dictionary is empty.</h1>}
        <div>{isOnEdit && <Edit onCancel={handleEdit} word={wordToEdit} toEdit={updateWord} />}</div>
        <div className="chip-buttons">
            <Chip
                label="Add New word"
                onClick={handleClick}
                deleteIcon={<AddIcon />}
                color="primary" 
            />
            {(allWords.length >0) && <Chip
                label="Delete All Words"
                onClick={handleDeleteAll}
                deleteIcon={<DeleteForeverIcon />}
                variant="outlined"
                color="primary" 
            />}
            
        </div>
        <div className="add-word">{isClicked && <NewWord onAdd={addNewWord}/>}</div>
        <ul>
        {allWords.map((word, index) => (
          <li key={index}>
            <p className="icon"><IconButton color="primary" aria-label="delete" onClick={() => handleDelete(index)} ><DeleteForeverIcon /></IconButton></p>
            <p className="icon"><IconButton color="primary" aria-label="change" onClick={() => handleEdit(index)} ><EditIcon /></IconButton></p>  
            <h3> {word.word}</h3> 
            <p>{word.definition}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </div>
}

export default Dictionary;