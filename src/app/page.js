'use client'
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/search";
import Filter from "./components/filter";

export default function Home() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filtheredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filtheredTodos)
  }
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("Asc")
  const [search, setSearch] = useState("")
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-black/50 backdrop-blur-[1px] p-10">
      <div className="desktop:w-2/5  px-8 p-5  mobile:w-11/12  text-white flex flex-col justify-center items-center bg-[#666565b4] gap-4 rounded-3xl shadow-[0px_0px_20px_rgba(0,0,0,1)]">
        <h1 className="desktop:text-2xl mobile:text-base">Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="h-[32vh] box-border w-11/12  overflow-y-auto scrollbar-hide">
          <div className="todo-list w-12/12 mobile:text-sm box-border pb-8 border-b-[2px] border-black  flex flex-col gap-4  " >
            {todos.
              filter((todo) =>
                filter === "all"
                  ? true
                  : filter === "completed"
                    ? todo.isCompleted
                    : !todo.isCompleted
              ).filter((todo) =>
                todo.text.toLowerCase()
                  .includes(search.toLowerCase()))
              .sort((a, b) => sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
              )
              .map((todo) => (
                <Todo todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} key={todo.id} />
              ))}
          </div>
        </div>

        <TodoForm addTodo={addTodo} />
      </div>
    </section>
  );
}
