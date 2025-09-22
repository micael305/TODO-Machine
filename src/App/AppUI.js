import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodosLoading';
import { TodoError } from '../TodosError';
import { EmptyTodos } from '../EmpyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext, TodoProvider } from '../TodoContext';

function AppUI({ }) {
  return (
    <>

      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodos,
          deleteTodos
        }) => (
          <TodoList>
            {loading &&
              <><TodoLoading /> <TodoLoading /> <TodoLoading /></>}
            {error && <TodoError />}
            {!loading && searchedTodos === 0 && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => completeTodos(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer >
      <CreateTodoButton />
    </>
  );
}

export { AppUI };