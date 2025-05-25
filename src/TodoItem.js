import './TodoItem.css'

function TodoItem(props) { 
  return ( //si completed = true le agregamos la clase Icon-check--active
    <li className="TodoItem"> 
      <span className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}>
        V 
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span  className="Icon Icon-delete" onClick={props.onDelete}>X</span>
    </li>
  );
}

export {TodoItem};