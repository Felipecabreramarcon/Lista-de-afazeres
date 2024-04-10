import { useState } from "react";

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        if (!value || !category) return;
        //adicionar toDo
        //limpar campos
        addTodo(value, category)
        setValue("")
        setCategory("")


    }

    return (
        <div className="w-11/12" >
            <h2 className="text-2xl mb-2">
                Criar Tarefa:
            </h2>
            <form onSubmit={handleSubmit}>
                <input value={value} className="bg-black/25 p-[5px] focus:border-none focus:outline-none text-white mb-[10px] border-[1px solid #DDD] w-full" type="text" placeholder="digite o titulo" onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-black/25 focus:border-none focus:outline-none p-[5px] mb-[10px] border-[1px solid #DDD] w-full text-white">
                    <option value="">Selecione uma categoria</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="estudos">Estudos</option>
                </select>
                <button className="bg-[#333974]/75  text-[#FFF] py-[5px] px-[10px] border-none rounded-sm cursor-pointer ease-in-out transition-all duration-100 hover:bg-[#333974] mb-4" type="submit">Criar tarefa:</button>
            </form>
        </div>
    )
}
export default TodoForm