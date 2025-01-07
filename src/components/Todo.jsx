import TodoList from "./TodoList";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter(todo => todo.done).length;
  const totalTodo = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totalTodo={totalTodo} />
    </div>
  );
}
