import { useState } from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {


    return (
        <div className="todo box-border flex flex-row justify-between items-center gap-4 border-[1px] bg-black/25  border-black p-2 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]" style={{ textDecoration: todo.isCompleted ? "line-through" : "", backgroundColor: todo.isCompleted ? "#5cb85c" : "" }}>
            <div className="content flex flex-col gap-4">
                <p className="text-xs  " >{todo.text}</p>
                <p className="text-xs">({todo.category})</p>
            </div>
            <div className="flex flex-col  justify-center gap-2">
                <button onClick={() => completeTodo(todo.id)} className="bg-[#5cb85c]/75 mobile:px-[5px] text-[#FFF] text-xs py-[2px] px-[10px] border-none rounded-sm cursor-pointer ease-in-out transition-all duration-100 hover:bg-[#5cb85c]">Completar</button>
                <button onClick={() => removeTodo(todo.id)} className="bg-[#d9534f]/75 mobile:px-[5px]  text-[#FFF] text-xs py-[2px] px-[10px] border-none rounded-sm cursor-pointer ease-in-out transition-all duration-100 hover:bg-[#d9534f]">x</button>
            </div>
        </div>
    )
}
export default Todo