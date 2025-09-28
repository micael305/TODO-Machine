import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodosLoading';
import { TodoError } from '../TodosError';
import { EmptyTodos } from '../EmpyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal'

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    totalTodos,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        )}
        {error && <TodoError />}
        {(!loading && totalTodos === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </>
  );
}

export { AppUI };