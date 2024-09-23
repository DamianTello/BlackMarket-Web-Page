import { FaSearch } from "react-icons/fa";

export const SearchBar = ({setSearch}) => {
     
    return <div className="flex flex-row w-full h-fit mx-auto p-0 text-blackish px-2">
                <button className="p-0 m-0 bg-white flex items-center relative left-1">
                    <div className="absolute">
                        <FaSearch style={{backgroundColor: "white", color: "grey"}} />
                    </div>
                </button>
            <label htmlFor="search" className="hidden"></label>
            <input 
            type="text" 
            id="search" 
            placeholder="Search..." 
            className="pl-4 m-0 w-full rounded-xl h-8"
            onChange={(event) => {setSearch(event.target.value)}}/>
        </div>
    
    
}