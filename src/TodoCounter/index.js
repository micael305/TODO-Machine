import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() { 
  const {
    completedTodos: completed,
    totalTodos: total,
  } = useContext(TodoContext);
  return ( 
    completed === total ?
      <h1 className='TodoCounter'>Has completado todos tus TODOs 🥳</h1> 
    :
    <h1 className='TodoCounter'> 
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export {TodoCounter}; 