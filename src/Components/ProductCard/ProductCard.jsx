
import { NavLink } from 'react-router-dom';


export const ProductCard = ({ id, image, name, price }) => {
  return (
    <NavLink to={`ProductDetails/${id}`}>
          <div className="product-card border border-whitish rounded-lg overflow-hidden flex flex-col h-full p-1 ">
              <div className="w-full h-48 overflow-hidden  ">
                <img src={image} alt={name} className='rounded-md object-cover w-full h-full ' />
              </div>
              <div className=" text-whitish h-2/5 flex-1 bg-gray-800 p-4 flex flex-col justify-between relative">
                  <h2 className=" text-whitish font-semibold w-full truncate">{name}</h2>
                  <p className='text-whitish w-full truncate'>{price}</p>
              </div>
          </div>
    </NavLink>
  );
};


