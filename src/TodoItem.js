import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css'

function TodoItem(props) { 
  return ( //si completed = true le agregamos la clase Icon-check--active
    <li className="TodoItem"> 
      <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}/>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      
      <DeleteIcon
      onDelete={props.onDelete}/>
    </li>
  );
}

export {TodoItem};