import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: "Caleb", role: "Backend Dev", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Jason", role: "Boyfriend", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Abi", role: "Girlfriend", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Rick", role: "Frontend Dev", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Jay", role: "Psychologist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "David", role: "Chemist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Sam", role: "Physiologist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Ryan", role: "Database Manager", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Reanne", role: "Composer", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {name: "Liz", role: "Psychiritrist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ]
  );
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
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role = {employee.role}
                img = {employee.img}
                />
            );
          })}
        </div>
          
        </> 
      ) : (
        <p>You cannot see the employees</p>
    )}
      
    </div>
  );
}

export default App;
