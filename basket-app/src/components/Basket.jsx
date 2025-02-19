import React from "react";

const Basket = () => {
  return (
    <div className="p-4 border rounded-md bg-white shadow-md">
      <h2 className="text-xl font-bold">Basket Component</h2>
      <p>Your basket items will be displayed here.</p>
        <section className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Your Basket</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Product A</li>
          <li>Product B</li>
          <li>Product C</li>
        </ul>
      </section>
    </div>
  );
};

export default Basket;
