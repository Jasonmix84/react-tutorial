import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {id: 1, name: "Caleb", role: "Backend Dev", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 2, name: "Jason", role: "Boyfriend", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 3, name: "Abi", role: "Girlfriend", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 4, name: "Rick", role: "Frontend Dev", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 5, name: "Jay", role: "Psychologist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 6, name: "David", role: "Chemist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 7, name: "Sam", role: "Physiologist", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 8, name: "Ryan", role: "Database Manager", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id: 9, name: "Reanne", role: "Composer", img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ]
  );

  function updateEmployee(id, newRole){ 
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

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
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role = {employee.role}
                img = {employee.img}
                updateEmployee={updateEmployee}
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
