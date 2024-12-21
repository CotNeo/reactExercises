const Todo = ({ todo }) => <li>{todo}</li>

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} todo={todo} />
    ))}
  </ul>
)

export default TodoList
