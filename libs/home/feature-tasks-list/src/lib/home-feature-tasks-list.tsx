import { TOTAL_TODOS, useTodoApi } from "@picsart/shared/data-access";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {Pagination} from "@picsart/ui";

export function HomeFeatureTasksList() {
  const [page, setPage] = useState(1);

  const { isLoading, isError, todos, performDelete, postTodo, performUpdate } = useTodoApi(page);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const value = inputRef.current?.value;
    if (!value) {
      return;
    }

    postTodo(value.trim());

    evt.currentTarget.reset();
  };

  const handleTodoToggle = (id: number) => (evt: ChangeEvent<HTMLInputElement>) => {
    const isChecked = evt.target.checked;
    performUpdate(id,{
      completed: isChecked,
    })
  };

  return (
    <div>
      {isError && "Error!"}
      {isLoading && "Loading..."}
      <form onSubmit={handleAddTodo}>
        <input type={"text"} ref={inputRef} placeholder={"Todo Title"} />
        <button type={"submit"}>New Todo</button>
      </form>
      <table>
        <thead>
        <tr>
          <td></td>
          <td>id</td>
          <td>title</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>
              <input type={'checkbox'} onChange={handleTodoToggle(todo.id)} checked={todo.completed}/>
            </td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              <button onClick={() => performDelete(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <Pagination totalItems={TOTAL_TODOS} currentPage={page} perPage={10} onPageChange={setPage}/>
            </td>
          </tr>
        </tfoot>
      </table>


    </div>
  );
}
