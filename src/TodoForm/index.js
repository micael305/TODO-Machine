import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        /*evita que al disparar el evento la pagina se 
        recargue y realice su accion por defecto*/
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    )
}
export { TodoForm };