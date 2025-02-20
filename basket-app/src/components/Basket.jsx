import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBasket, selectBasketItems, removeItem, decreaseItemQuantity } from "host/store";

const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  

  useEffect(() => {
    dispatch(fetchBasket()); // ✅ Load basket from API when the app starts
  }, [dispatch]);

  console.log("🛒 Basket Items:", items);
  
  

  return (
    <section className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Your Basket</h2>
      {items.length === 0 ? (
        <p>No items in the basket.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="p-4 rounded-md border border-gray-200">
              <h3 className="font-bold">{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Basket;
