import { Button } from "flowbite-react"
import { HiHeart, HiMinus, HiOutlineHeart, HiOutlineXMark, HiPlus } from "react-icons/hi2"
import { addToCart,removeFromCart } from "../../store/reducer/cart.reducer"
import { useDispatch } from "react-redux"


const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const handleRemoveItem = () => {
    dispatch(removeFromCart(item._id))
  }


  
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20 dark:hidden" src={item.image} alt="imac image" />
        <img className="hidden h-20 w-20 dark:block" src={item.image} alt="imac image" />
      </a>

      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <Button color={""}  className=" h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <HiMinus />
          </Button>
         
          <input type="text"  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
          <Button color={""}  className=" h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <HiPlus />
          </Button>
        </div>
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">{item.price*item.quantity}</p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.title}</a>

        <div className="flex items-center gap-4">
          <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
           <HiOutlineHeart/>
            Add to Favorites
          </button>

          <button type="button" onClick={handleRemoveItem} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
          <HiOutlineXMark/>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem