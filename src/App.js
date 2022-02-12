import React, {useContext} from 'react';
import './App.css';
import routes from './routes';

function App() {

  return (
    <div className='app-main'>
      { routes }
    </div>
  )
};

export default App;