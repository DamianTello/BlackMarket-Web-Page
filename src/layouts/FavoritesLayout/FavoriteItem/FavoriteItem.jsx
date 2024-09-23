import { NavLink } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";

export const FavoriteItem = ({ id, image, name, price }) => {

  return ( <div className="product-card border border-whitish rounded-lg overflow-hidden flex flex-col h-full p-1 text-center relative">
            <NavLink to={`/ProductDetails/${id}`}>
              <div className="w-full h-48 overflow-hidden  ">
                <img src={image} alt={name} className='rounded-md object-cover w-full h-full ' />
              </div>
            </NavLink>
              <div className=" text-whitish h-2/5 flex-1 bg-gray-800 p-4 flex flex-col justify-between relative">
                  <h2 className=" text-whitish font-semibold w-full truncate">{name}</h2>
                  <p className='text-whitish w-full truncate'>{price}</p>
              </div>
              <div>
                <button 
                    className='absolute right-2 top-2 h-8 w-8'
                    >
                      <FaTrash />
                </button>
              </div>
          </div>
  );
};
