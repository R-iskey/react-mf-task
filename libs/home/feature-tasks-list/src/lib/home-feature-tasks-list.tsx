import { useFetchTodos } from "@picsart/shared/data-access";
export function HomeFeatureTasksList() {
  const {isLoading, isError, todos = []} = useFetchTodos();
  return (
    <>
      {isError && 'Error!'}
      {isLoading && 'Loading...'}
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
}

export default HomeFeatureTasksList;
