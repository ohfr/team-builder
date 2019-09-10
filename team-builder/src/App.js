import React, {useState} from 'react';
import './App.css';

import Form from './Components/Form';

function App() {
  const [team, addTeam] =useState({
    name: "",
    email: "",
    role: ""
})
  return (
    <div className="App">
     <Form addTeam={addTeam} />
    </div>
  );
}

export default App;
