import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodosLoading';
import { TodoError } from '../TodosError';
import { EmptyTodos } from '../EmpyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { useContext } from 'react';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    totalTodos,
    openModal
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
            onDelete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

      {openModal && (
        <Modal>
          Funcionalidad que agrega TODOs
        </Modal>
      )}

    </>
  );
}

export { AppUI };