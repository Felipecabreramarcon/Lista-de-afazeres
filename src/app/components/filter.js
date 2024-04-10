const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter w-11/12 flex flex-col gap-2  border-b-[2px] border-black pb-4   ">
            <h2 className="m-0 p-0 text-3xl">Filtrar:</h2>
            <div className="flex flex-row justify-between items-center gap-8 ">
                <div className="filter-options flex flex-col gap-2 flex-1">
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full bg-black/25 p-[5px] text-white focus:border-none focus:outline-none">
                        <option value="all">Todas</option>
                        <option value="completed">Completas</option>
                        <option value="incomplete">Incompletas</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <p>Ordem alfabética:</p>
                    <div className="flex flex-row gap-2">
                        <button onClick={() => setSort("Asc")} className="bg-[#064354bf]/50 mr-2 text-[#FFF] text-sm py-[2px] px-[10px] border-none rounded-sm cursor-pointer ease-in-out transition-all duration-100 hover:bg-[#064354bf]">Asc</button>
                        <button onClick={() => setSort("Des")} className="bg-[#064354bf]/50 mr-2 text-[#FFF] text-sm py-[2px] px-[10px] border-none rounded-sm cursor-pointer ease-in-out transition-all duration-100 hover:bg-[#064354bf]">Des</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter