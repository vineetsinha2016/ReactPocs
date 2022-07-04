import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './ItemList';
import Home from './Home';
import './App.css';
import ItemEdit from './ItemEdit';

  const App = () => {
     return (<Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/items' exact={true} element={<ItemList/>}/>
        <Route path='/items/:itemUid' element={<ItemEdit/>}/>
      </Routes>
    </Router> 
  )
}

export default App;
