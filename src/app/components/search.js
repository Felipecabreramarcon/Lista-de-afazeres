
const Search = ({ search, setSearch }) => {
    return (
        <div className="search flex flex-col w-11/12 gap-4 border-b-[2px] border-black pb-4">
            <h2 className="mobile:text-sm">Pesquisar:</h2>
            <input className="w-full focus:border-none bg-black/25 focus:outline-none p-[5px] text-white" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar:" />
        </div>
    )
}
export default Search