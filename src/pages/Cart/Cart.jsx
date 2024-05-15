import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const [quantity, setQantity] = useState(1);
  const stock = 10;

  const increment = () => {
    if (quantity < stock) setQantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQantity(quantity - 1);
  };

  return (
    <main className="px-10 w-full flex flex-col items-center py-20">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-[40vw] grid gap-4">
          <h2 className="text-2xl font-medium">Cart</h2>
          <div className="flex flex-start gap-4">
            <img
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png"
              className="w-[200px] h-[200px] object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Nike Dunk Low</h3>
              <p className="font-medium text-gray-500">Men's Shoes</p>
              <p className="font-medium text-gray-500">Black/White</p>
              <div className="flex items-center gap-4">
                <p className="font-medium text-gray-500">Quantity:</p>
                <button className="btn btn-circle btn-sm" onClick={increment}>
                  +
                </button>
                <span>{quantity}</span>
                <button className="btn btn-circle btn-sm" onClick={decrement}>
                  -
                </button>
              </div>
              <div className="flex items-center">
                <button className="btn btn-ghost btn-circle">
                  <IoMdHeartEmpty className="w-6 h-6" />
                </button>
                <button className="btn btn-ghost btn-circle">
                  <FiTrash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
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
