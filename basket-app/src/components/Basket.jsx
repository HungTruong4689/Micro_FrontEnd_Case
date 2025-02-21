import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBasket, selectBasketItems } from "host/store";
import CheckoutForm from "./CheckoutForm";
import CartItem from "./CartItem";

const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  

  useEffect(() => {
    dispatch(fetchBasket()); // ✅ Load basket from API when the app starts
  }, [dispatch]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0;
  const tax = (subtotal * 0.05).toFixed(2); // Example: 5% tax
  const total = (subtotal + shipping + parseFloat(tax)).toFixed(2);

  console.log("🛒 Basket Items:", items);
  
  

  return (
    <section className="bg-gray-100 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Checkout Forms</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cart Summary */}
        <div className="bg-white p-6 shadow-md rounded-md">
          {items.length === 0 ? (
            <p className="text-gray-500">No items in the basket.</p>
          ) : (
            <div>
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <hr className="my-4" />
              <p className="flex justify-between"><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></p>
              <p className="flex justify-between"><span>Shipping estimate</span> <span>${shipping.toFixed(2)}</span></p>
              <p className="flex justify-between"><span>Tax estimate</span> <span>${tax}</span></p>
              <p className="flex justify-between font-bold text-lg"><span>Total</span> <span>${total}</span></p>
            </div>
          )}
        </div>

        {/* Checkout Form */}
        <CheckoutForm />
      </div>
    </section>
  );
};

export default Basket;
