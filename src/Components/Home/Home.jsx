import {ProductCard} from '../ProductCard';
import './Home.css';
import {Carousel} from '../Carousel';
import { HeaderLogOut } from '../Header/HeaderLogOut';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../axios';


export const Home = () => {
  const [products, setProducts] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get('/products');
        setProducts(data.data);

        
        

      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts(); 

  }, []);

  return (
    <div className="w-full bg-black text-white p-0 m-0 p-0">
     <div className="sm:flex max-h-80 md:overflow-hidden hidden">
      { <Carousel images= {carouselImages} />}
     </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {products.slice(0,6).map((product, index) => (
          <ProductCard
            id = {product.id}
            key={index}
            image={product.pictures[0]}
            name={product.title}
            price={product.unit_price}
          />
        ))}
      </div>
    </div>
  );
};

