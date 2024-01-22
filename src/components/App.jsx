import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import Practice from './Practice';
import Dictionary from './Dictionary';
import words from "./words";

// {/* <Route path="/practice" Component={Practice} />
// <Route path="/dictionary" Component={Dictionary}  /> */}

function App() {
  const [allWords, setWords] = useState(words);
  return (<Router>
    <div>
      <Routes>
        <Route path="/" exact Component={MainPage} />

        <Route
            path="/practice"
            element={<Practice allWords={allWords} setWords={setWords} />}
          />
          <Route path="/dictionary" element={<Dictionary allWords={allWords} setWords={setWords}/>} />


      </Routes>
    </div>
  </Router>
  );
}

export default App;

