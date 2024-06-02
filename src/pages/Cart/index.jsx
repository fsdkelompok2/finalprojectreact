import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useCartQuery, useDecreaseItemQuantityMutation, useDeleteItemMutation, useIncreaseItemQuantityMutation } from "../../redux/api/cart";

const Cart = () => {
  const { user } = useSelector(state => state.auth);
  const { cartItems } = useSelector(state => state.cart)

  const {
    isLoading: cartQueryIsLoading, 
    isSuccess: cartQueryIsSuccess, 
    isError: cartQueryIsError, 
  } = useCartQuery(user.cartId);
  const [increaseItemQuantityMutation, {
    isSuccess: increaseItemQuantityMutationIsSuccess,
    isLoading: increaseItemQuantityMutationIsLoading,
    isError: increaseItemQuantityMutationIsError,
  }] = useIncreaseItemQuantityMutation();
  const [decreaseItemQuantityMutation, {
    isSuccess: decreaseItemQuantityMutationIsSuccess,
    isLoading: decreaseItemQuantityMutationIsLoading,
    isError: decreaseItemQuantityMutationIsError,
  }] = useDecreaseItemQuantityMutation();
  const [deleteItemMutation, {
    isSuccess: deleteItemMutationIsSuccess,
    isLoading: deleteItemMutationIsLoading,
    isError: deleteItemMutationIsError,
  }] = useDeleteItemMutation();

  const increaseQty = (cartItemId) => {
    increaseItemQuantityMutation({cartId: user.cartId, cartItemId});
  };
  
  const decreaseQty = (cartItemId) => {
    decreaseItemQuantityMutation({cartId: user.cartId, cartItemId});
  };
  
  const removeCartItemHandler = (cartItemId) => {
    deleteItemMutation({cartId: user.cartId, cartItemId});
  };

  return (
    <main className="px-10 w-full flex flex-col items-center py-20">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Cart page header */}
        <div className="w-full md:w-[40vw] grid gap-4">
          <h2 className="text-2xl font-medium">Cart</h2>
          {/* Cart Items */}
          { cartItems?.length === 0 ? <h3>No items yet</h3> : cartItems?.map((item, index) => (
              <div key={index} className="flex flex-start gap-4">
                <img
                  src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png"
                  className="w-[200px] h-[200px] object-cover"
                />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">[PRODUCT NAME]</h3>
                    <p className="font-medium text-gray-500">[PRODUCT CATEGORY]</p>
                    <p className="font-medium text-gray-500">[CHOSEN COLOR]</p>
                    <div className="flex items-center gap-4">
                      <p className="font-medium text-gray-500">Quantity:</p>
                      <button disabled={
                        increaseItemQuantityMutationIsLoading || 
                        decreaseItemQuantityMutationIsLoading || 
                        deleteItemMutationIsLoading
                        } className="btn btn-circle btn-sm" onClick={increaseQty.bind(this, item.cart_item_id)}>
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button disabled={
                        increaseItemQuantityMutationIsLoading || 
                        decreaseItemQuantityMutationIsLoading || 
                        deleteItemMutationIsLoading
                        } className="btn btn-circle btn-sm" onClick={decreaseQty.bind(this, item.cart_item_id)}>
                        -
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button className="btn btn-ghost btn-circle">
                        <IoMdHeartEmpty className="w-6 h-6" />
                      </button>
                      <button disabled={
                        increaseItemQuantityMutationIsLoading || 
                        decreaseItemQuantityMutationIsLoading || 
                        deleteItemMutationIsLoading
                        } className="btn btn-ghost btn-circle" onClick={removeCartItemHandler.bind(this, item.cart_item_id)}>
                        <FiTrash2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
        {/* Order summary */}
        <div className="w-full md:w-[30vw] grid gap-4">
          <h2 className="text-2xl font-medium pb-4">Summary</h2>
          <ul className="w-full font-medium pb-10 grid grid-cols-2 justify-between">
            <li>Subtotal:</li>
            <li>[SUBTOTAL]</li>
            <li>Delivery:</li>
            <li>[DELIVERY COST]</li>
            <li>Tax:</li>
            <li>[TAX COST]</li>
          </ul>
          <div className="border-b border-t py-6">
            <p className="grid grid-cols-2">
              <span>Total:</span>
              <span>[TOTAL PRICE]</span>
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
