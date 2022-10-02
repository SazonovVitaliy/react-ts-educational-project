import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(usersUrl);
      setUsers(response.data);
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(todosUrl);
      setTodos(response.data);
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }
  const handleChange = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outline}
        width={"200px"}
        height={"200px"}
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem
            handleChange={handleChange}
            handleRemove={handleRemove}
            todo={todo}
            key={todo.id}
          />
        )}
      />
    </div>
  );
};

export default App;

//26min 30sec
