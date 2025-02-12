import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee (props) {
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(props.role);

  const handleChange = (e) => {
    e.preventDefault();
    setRole(e.target.value);
    props.updateEmployee(props.id, e.target.value);
  } ;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
          <select  value={role} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            <option value="Workers">Worker</option>
            <option value="Grunt">Grunt</option>
            <option value="Boss">Boss</option>
            <option value="Manager">Manager</option>
          </select>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:gray-600 dark:hover:gray-700 focus:outline-none dark:focus:ring-blue-800" >Cancel</button>
          
          <button  onClick={handleClose} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Update</button>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;