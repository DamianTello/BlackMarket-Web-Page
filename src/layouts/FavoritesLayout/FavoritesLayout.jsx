import { FavoriteItem } from './FavoriteItem';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../axios';

export const FavoritesLayout = () => {

    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = async () => {
        try {
            const { data } = await axiosInstance.get("/products/favorites");
            setFavorites(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return <div className="p-4 flex gap-4 flex-row flex-wrap justify-center h-fit">
        {/* {favorites.map((favorite) => {
                return <FavoriteItem 
                            key={favorite.id} 
                            id={favorite.product.id}
                            image={favorite.product.pictures[0]}
                            name={favorite.product.title}
                            price={favorite.product.unit_price}
                             />
            })} */}
            <FavoriteItem  
                        id={1}
                        image={"https://placehold.co/400"} 
                        name={"test item"}
                        price={"$123123"}    />
            <FavoriteItem  
                        id={1}
                        image={"https://placehold.co/400"} 
                        name={"test item"}
                        price={"$123123"}    />
            <FavoriteItem  
                        id={1}
                        image={"https://placehold.co/400"} 
                        name={"test item"}
                        price={"$123123"}    />
    </div>
    
}