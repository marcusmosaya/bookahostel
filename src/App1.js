import logo from './logo.svg';
import React from 'react';
import {BrowserRouter,Route,Switch,Link,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" component={Home} element={<Home />} />
    <Route path="/about" component={About} element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
