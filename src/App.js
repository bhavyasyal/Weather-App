import React from 'react';

import './App.css';
//import Weather from './Components/Weather'
//import City from './Components/City'
import Routing from "./Routing"
import configureStore from './store'
import { Provider } from 'react-redux';
function App() {
  const initialStoreState={}
  return (
<Provider store={configureStore(initialStoreState)} >
 
  
     <Routing/>
    
      </Provider>
  );
}

export default App;
