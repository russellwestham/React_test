import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';


function App() {
  return (
    <div className='App'>
      <Subject title = "WEB" sub = "world wide web"></Subject>
      <Subject title = "React" sub = "For UI"></Subject>
      <TOC></TOC>
      <Content title = "HTML" sub = "      HTML is Hypertext Markup Language."></Content>
    </div>
  );
}
 
export default App;