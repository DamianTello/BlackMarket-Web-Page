import { useState, useContext } from "react";
import { UserSessionContext } from "../../Context/UserSessionProvider";
import { axiosInstance } from "../../axios";

export const CartItem = ({itemThumbnail, itemName, itemQuantity, itemPrice, itemID, itemStock}) => {

    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [actualQuantity, setActualQuantity] = useState(itemQuantity);
    const [actualPrice, setActualPrice] = useState(itemPrice);
    const { fetchCart } = useContext(UserSessionContext);

    
    const addOneMore = async () => {
        try {
          if(itemStock <= itemQuantity){
            return alert("No more stock available");
          }
          setIsAddingToCart(true);
          const response = await axiosInstance.patch(`/shopping_cart/line_items/${itemID}`, {
            "line_item": {
              "quantity": actualQuantity + 1
            }
          });
          setActualQuantity(response.data.quantity);
          setActualPrice(response.data.total_price_in_shopping_cart);
        } catch (error) {
          console.error("Error adding one more product to cart:", error);
        } finally {
          setIsAddingToCart(false);
          fetchCart();
        }
    }

    const removeOneCopy = async () => {
        try {
            setIsAddingToCart(true);
            let response;
            if(actualQuantity === 1){
                response = await axiosInstance.delete(`/shopping_cart/line_items/${itemID}`);
                fetchCart();
                return
            } else {
                response = await axiosInstance.patch(`/shopping_cart/line_items/${itemID}`, {
                    "line_item": {
                    "quantity": actualQuantity - 1
                    }
                });
            }
          setActualQuantity(response.data.quantity);
          setActualPrice(response.data.total_price_in_shopping_cart);
        } catch (error) {
          console.error("Error removing one product from cart:", error);
        } finally {      
            setIsAddingToCart(false);
            fetchCart();
        }
    }

    
    return <div className="border-2 border-whitish rounded-xl p-2 my-2 flex flex-row justify-between items-center overflow-x-hidden overflow-y-hidden">
        <div className="h-16 w-16 min-w-16 min-h-16 mb-6 flex items-center justify-center mt-4">
            <img src={itemThumbnail} alt="" className="rounded-md object-cover w-full h-full" />
        </div>
        <p className="hidden xs:inline-block ml-4">{itemName}</p>
        <div className=" text-sm p-2">
            <p className="overflow-hidden text-nowrap text-xs w-32 xs:hidden text-center">{itemName}</p>
            <div className="flex flex-row items-center justify-around">
                <div className="flex flex-row gap-2 items-center">
                    <button className="text-4xl" onClick={addOneMore}>+</button>
                    <p className={isAddingToCart ? "text-gray-500" : ""}>{actualQuantity}</p>
                    <button className="text-4xl mb-1" onClick={removeOneCopy}>-</button>
                </div>
            </div>
                <p className="text-center">{actualPrice}</p>
        </div>
    </div>

}