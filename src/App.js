// import logo from './logo.svg';

// 메뉴를 클릭하거나, 브라우저 url이 바뀔 때 보여줄 컴포넌트를 매핑하고, 렌더링하는 과정을 라우팅이라 생각하면 된다.

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | 
        <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
      
    </div>
  );
}

export default App;
