import { userTodos, useTodoIds } from "../services/queries";

const Todo = () => {
  const TodosIds = useTodoIds();

  const TodoList = userTodos(TodosIds.data || []);
  if (TodosIds.isLoading) return <div>Loading...</div>;

  if (TodosIds.isError) return <div>Error</div>;

  return (
    <div>
    
      {TodoList.map(({ data }) => (
        <div key={data?.id}>
          <strong>Title:</strong> {data?.title} <br />
          <strong>Description:</strong> {data?.description} <br />
        </div>
      ))}
    </div>
  );
};

export default Todo;
