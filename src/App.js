import React from 'react';
import { HashRouter} from 'react-router-dom';
import { Provider} from 'react-redux'
import routes from './routes'

import './reset.css'
import './App.css'
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <HashRouter>
      <div className="App">
      <Navbar />
      {routes}
      </div>
        
    </HashRouter>
    </div>
  )
}

export default App