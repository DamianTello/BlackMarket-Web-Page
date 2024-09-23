import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../axios'
import { Button } from '../../Components/Header/Buttons/Button'
import { UserSessionContext } from '../../Context/UserSessionProvider'
import loadingGif from '../../images/loading.gif'

export const ProductInfo = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [inCartId, setInCartId] = useState(null)
  const { cart, setCart, fetchCart } = useContext(UserSessionContext)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axiosInstance.get('/shopping_cart')
        setCart(data)

        const lineItem = data.line_items.find(
          item => item.product.id === parseInt(id)
        )
        if (lineItem) {
          setInCartId(lineItem.id)
          setQuantity(lineItem.quantity)
        } else {
          setInCartId(null)
          setQuantity(0)
        }

      } catch (error) {
        console.log(error)
      }
    }

    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCart()
    fetchProduct()

  }, [id])

  const addToCart = async () => {
    try {
      if (product.stock <= 0) {
        return alert('No more stock available')
      }
      setIsAddingToCart(true)
      const response = await axiosInstance.post(`/shopping_cart/line_items`, {
        line_item: {
          quantity: 1,
          product_id: id
        }
      })
      setInCartId(response.data.id)
      setQuantity(response.data.quantity)
    } catch (error) {
      console.error('Error adding product to cart:', error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  const addOneMore = async () => {
    try {
      if (product.stock <= quantity) {
        return alert('No more stock available')
      }
      setIsAddingToCart(true)
      const response = await axiosInstance.patch(
        `/shopping_cart/line_items/${inCartId}`,
        {
          line_item: {
            quantity: quantity + 1
          }
        }
      )
      setQuantity(response.data.quantity)
    } catch (error) {
      console.error('Error adding one more product to cart:', error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  const handleAddToCart = () => {
    fetchCart()
    if (quantity > 0) {
      addOneMore()
    } else {
      addToCart()
    }
  }

  const addToFavorites = async () => {
    try {
      setIsAddingToFavorites(true)
      const response = await axiosInstance.post(`/products/${id}/favorite`)
      console.log(response)
    } catch (error) {
      console.error('Error adding product to favorites:', error)
    } finally {
      setIsAddingToFavorites(false)
    }
  }

  if (isLoading) {
    return (
      <div className='w-72 h-52 mx-auto'>
        <img src={loadingGif} alt='loading' className='' />
      </div>
    )
  }

  return (
    <div className='flex flex-col sm:flex-row p-4 sm:pt-10'>
      <div className='block h-1/2 w-full max-w-md self-center sm:w-full sm:h-full sm:min-w-72 sm:mr-4 sm:max-w-10'>
        <img
          src={product.pictures[0]}
          alt={product.title}
          className='rounded-md h-full w-full object-fit sm:hidden'
        />
        <img
          src={product.pictures[0]}
          alt={product.title}
          className='rounded-md hidden h-full w-full object-cover sm:block sm:min-w-60 sm:min-h-full'
        />
      </div>
      <div className='flex flex-col justify-around'>
        <h1 className='my-4 text-3xl whitespace-normal'>{product.title}</h1>
        <p className='whitespace-normal text-tiny py-2'>
          {product.description}
        </p>
        <p className='text-sm text-gray-500 py-2'>Estado: {product.state}</p>
        <p className='text-sm text-gray-500 py-2'>Stock: {product.stock}</p>
        <p className='my-6 text-4xl'>{product.unit_price}</p>
        <div className='flex flex-col w-60 self-center min-h-fit items-center'>
          <Button
            onClick={handleAddToCart}
            content={isAddingToCart ? 'Adding...' : 'Add to cart'}
            extraClasses={'self-center mb-4 min-w-40'}
          />
          <Button
            onClick={addToFavorites}
            content={isAddingToFavorites ? "Adding..." : 'Add to favorites'}
            extraClasses={'self-center mb-4 min-w-40'}
          />
        </div>
      </div>
    </div>
  )
}
