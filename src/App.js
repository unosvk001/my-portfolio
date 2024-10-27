import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>My Portfolio</h1>
        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
