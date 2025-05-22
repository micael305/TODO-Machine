import './TodoItem.css'

function TodoItem(props) { 
  return ( //si completed = true le agregamos la clase Icon-check--active
    <li className="TodoItem"> 
      <span className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}>
        V 
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export {TodoItem};