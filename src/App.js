import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <input type = 'text' onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
        />
          <Employee name=' Caleb' role='intern'/>
          <Employee name=' Jason' role = 'boyfriend'/>
          <Employee name = ' Abi' role = 'girlfriend'/>
          <Employee name = ' Jay' role = {role}/>

        </> 
      ) : (
        <p>You cannot see the employees</p>
    )}
      
    </div>
  );
}

export default App;
