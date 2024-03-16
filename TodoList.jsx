import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos(() => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let MarkAllDone = () => {
setTodos((prevTodos) => {
  return prevTodos.map((todo) => {
    return {
      ...todo,
      isDone: true,
    }
  })
})
};

let MarkAsDone = (id) => {
setTodos((prevTodos) => {
return prevTodos.map((todo) => {
  if(todo.id === id) {
    return {
      ...todo,
      isDone: true,
    }
  } else {
    return todo;
  }
})
})
};



  return (
    <div>
      <input
        type="text"
        value={newTodo}
        placeholder="add a task"
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
              &nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>
            </li>
          );
        })}
      </ul>

      <br />
      <br />
      <button onClick={MarkAllDone}>Mark All As Done</button>
    </div>
  );
}
