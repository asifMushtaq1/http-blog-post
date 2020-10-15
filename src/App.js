import React from 'react';
import Blog from './Containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    //<BrowserRouter basename='/'>
    <BrowserRouter>
        <div>
           <Blog />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
