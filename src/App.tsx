import React from 'react';
import './App.css';
import {splitIntoWords} from "./lesson01/01";

function App() {
  const sentence = 'Hello my friend';
  const result = splitIntoWords(sentence);
  console.log(result[0] === 'hello');
  console.log(result[1] === 'my');
  console.log(result[2] === 'friend');
}

export default App;
