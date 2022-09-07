import React from 'react';
import './App.scss';
import {Main} from "./components/Main";
import {Bar} from "./components/Bar";

function App() {
  return (
    <div className={'wrapper'}>
      <div className={'container'}>
        <Main/>
        <Bar/>
        <footer className={'footer'}></footer>
      </div>
    </div>
  );
}

export default App;
