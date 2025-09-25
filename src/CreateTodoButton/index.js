import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function CreateTodoButton() {
  const {
    setOpenModal
  } = useContext(TodoContext);

    return(
      <button className="CreateTodoButton"
      onClick={
        (event) => {
          setOpenModal(state => !state);
      }}>+</button>  
    );
}

export {CreateTodoButton};