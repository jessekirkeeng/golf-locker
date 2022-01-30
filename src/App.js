import React, {useContext} from 'react';
import './App.css';
import routes from './routes';
import { UserContext } from "./components/Sample/Sample";


function App() {
  const { user } = useContext(UserContext);

  return (
    <div className='app-main'>
      { routes }
    </div>
  )
};

export default App;