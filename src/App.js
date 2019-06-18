import React from 'react';
import { HashRouter} from 'react-router-dom';
import { Provider} from 'react-redux'
import routes from './routes'
import Nav from './components/Nav'
import './reset.css'
import './App.css'


function App() {
  return (
    <div>
    <HashRouter>
      <div className="App">
      <Nav />
      {routes}
      </div>
        
    </HashRouter>
    </div>
  )
}

export default App