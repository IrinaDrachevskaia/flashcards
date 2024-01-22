import React, {useState} from "react";
import Heading from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import NewWord from "./NewWord";


function Practice({ allWords, setWords }) {

  const [currentWordIndex, setCurrentWordIndex] = useState(
    Math.floor(Math.random() * allWords.length)
  );

  const wordToShow = allWords[currentWordIndex];


  function showNewCard() {
    const randomNum = Math.floor(Math.random() * allWords.length);
    setCurrentWordIndex(randomNum);
  }

  function addNewWord(newWord) {
    setWords((prevWords) => {
      const updatedWords = [...prevWords, newWord];
      setCurrentWordIndex(updatedWords.length - 1); // Update the index to the newly added word

      return updatedWords;
    });
  }

  function deleteWord(id) {
    setWords((prevWords) => {
      return prevWords.filter((word, index) => index !== Number(id));
    });
    const randomNum = Math.floor(Math.random() * allWords.length);
    setCurrentWordIndex(randomNum);
  }
  

  return (
    <div>
      <Heading />
      <div className="container">
      <NewWord onAdd={addNewWord}/>
      {wordToShow ? (
        <Card
          id={currentWordIndex}
          wordToLearn={wordToShow.word}
          definition={wordToShow.definition}
          onDelete={deleteWord}
          onNext={showNewCard}
        />
      ) : <Card
          id={null}
          wordToLearn="You don't have any word to learn"
          definition="Please add new word"
          onDelete={deleteWord}
          onNext={showNewCard}
        />}
      </div>
      <Footer />
    </div>
  );
}

export default Practice;
