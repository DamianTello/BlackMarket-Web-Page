import { SearchBar } from "../../Components/SearchBar"
import { FiltersBar } from "../../Components/FiltersBar"
import { CartItem } from "../../Components/CartItem"
import { useState, useEffect, useContext } from "react"
import { axiosInstance } from "../../axios"
import { UserSessionContext } from "../../Context/UserSessionProvider"


export const CartLayout = () => {


    const { cart, setCart } = useContext(UserSessionContext)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ filter, setFilter ] = useState("a-z")
    const [ filteredItems, setFilteredItems ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        const fetchCart = async () => {
            try{
                const { data } = await axiosInstance.get("/shopping_cart")
                setCart(data)
                setFilteredItems(data.line_items)
            } catch(error){
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCart()
        
    }, [])

    const setFilterType = (filterType) => {
        setFilter(filterType)
    }

    const setSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    const searchedItems = (items, searchTerm) => {
        if(!Array.isArray(items)){
            return items
        }
        return items.filter((item) => item.product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    const getFilteredItems = (items, filterType) => {
        if(!Array.isArray(items)){
            return items
        }
        switch (filterType) {
            case 'ascPrice':
                return [...items].sort((a, b) => parseInt(a.total_price_in_shopping_cart.slice(1)) - parseInt(b.total_price_in_shopping_cart.slice(1)))  
            case 'descPrice':
                return [...items].sort((a, b) => parseInt(b.total_price_in_shopping_cart.slice(1)) - parseInt(a.total_price_in_shopping_cart.slice(1)))
            case 'a-z':
                return [...items].sort((a, b) => a.product.title.localeCompare(b.product.title))
            case 'z-a':
                return [...items].sort((a, b) => b.product.title.localeCompare(a.product.title))
            default:
                return items
        }
    }

    useEffect( () => {
        setFilteredItems(getFilteredItems(searchedItems(cart.line_items, searchTerm), filter))
    }, [filter, cart, searchTerm])

    if(isLoading){
        return <div className="w-72 h-52 mx-auto">
            <img src="src/images/loading.gif" alt="loading" className=""/>
        </div>
    }

    return <div className="mx-auto mb-6 p-6 border-2 border-whitish rounded-3xl w-11/12 max-w-3xl ">
        <SearchBar setSearch={setSearch}/>
        <FiltersBar setFilterType={setFilterType} />
        <div className="p-2 mx-auto mt-4 text-whitish min-h-72 h-40 max-h-96 overflow-auto">
            {  
                filteredItems.map(
                    (item) => <CartItem 
                            key={item.id}
                            itemThumbnail={item.product.pictures[0]}
                            itemName={item.product.title}
                            itemQuantity={item.quantity}
                            itemPrice={item.total_price_in_shopping_cart}
                            itemID={item.id}
                            itemStock={item.product.stock}
                        />
                    
                )
            }
        </div>
        <p className="text-whitish text-right m-2 text-xl">{"Total: " + cart.total_price}</p>
    </div>
}
