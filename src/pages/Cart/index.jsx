import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, removeCartItem } from "../../redux/features/cartSlice";
import { useCartQuery } from "../../redux/api/cart";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();

  // const { cartItems } = useSelector(state => {
  //   console.log(state)
    
  //   return state.cart
  // });

  const {data, isLoading, isSuccess, isError, error} = useCartQuery();

  const setItemToCart = (item, newQuantity) => {
    const cartItem = {
      product: item?.product,
      name: item?.name,
      price: item?.price,
      image: item?.image,
      stock: item?.stock,
      quantity: newQuantity,
    };

    dispatch(setCartItem(cartItem));
  };

  const increaseQty = (item, quantity) => {
    const newQuantity = quantity + 1;

    if (newQuantity > item?.stock) return;

    setItemToCart(item, newQuantity);
  };

  const decreaseQty = (item, quantity) => {
    const newQuantity = quantity - 1;

    if (newQuantity <= 0) return;

    setItemToCart(item, newQuantity);
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  useEffect(() => {
    if(isLoading) { console.log(`useCartQueryIsLoading`) };
    if(isSuccess) { console.log(`useCartQueryIsSuccess, ${data}`) };
    if(isError) { console.log(`useCartQueryIsError, ${error}`) };
  }, [
    isLoading,
    isSuccess,
    isError,
  ])

  return (
    <main className="px-10 w-full flex flex-col items-center py-20">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Cart page header */}
        <div className="w-full md:w-[40vw] grid gap-4">
          <h2 className="text-2xl font-medium">Cart</h2>
          <div className="flex flex-start gap-4">
            <img
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png"
              className="w-[200px] h-[200px] object-cover"
            />
            {/* Cart Items */}
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Nike Dunk Low</h3>
              <p className="font-medium text-gray-500">Men's Shoes</p>
              <p className="font-medium text-gray-500">Black/White</p>
              <div className="flex items-center gap-4">
                <p className="font-medium text-gray-500">Quantity:</p>
                <button className="btn btn-circle btn-sm" onClick={increaseQty}>
                  +
                </button>
                <span>"[quantity_placeholder]"</span>
                <button className="btn btn-circle btn-sm" onClick={decreaseQty}>
                  -
                </button>
              </div>
              <div className="flex items-center">
                <button className="btn btn-ghost btn-circle">
                  <IoMdHeartEmpty className="w-6 h-6" />
                </button>
                <button className="btn btn-ghost btn-circle" onClick={removeCartItemHandler}>
                  <FiTrash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Order summary */}
        <div className="w-full md:w-[30vw] grid gap-4">
          <h2 className="text-2xl font-medium pb-4">Summary</h2>
          <ul className="w-full font-medium pb-10 grid grid-cols-2 justify-between">
            <li>Subtotal:</li>
            <li>Rp. 1,000,000.00</li>
            <li>Delivery:</li>
            <li>Rp. 20,000.00</li>
            <li>Tax:</li>
            <li>Rp. 10,000.00</li>
          </ul>
          <div className="border-b border-t py-6">
            <p className="grid grid-cols-2">
              <span>Total:</span>
              <span>Rp. 1,030,000</span>
            </p>
          </div>
          <button className="btn bg-black text-white rounded-full">
            Guest Checkout
          </button>
          <button className="btn bg-black text-white rounded-full">
            Member Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
