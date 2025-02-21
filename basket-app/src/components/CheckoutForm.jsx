import React from "react";
import { Button, Input, Checkbox, Collapse } from "antd";
import "tailwindcss/tailwind.css";



const CheckoutForm = () => {

 

const collapseItems = [
  {
    key: "1",
    label: "Payment details",
    children: <p>Payment options here...</p>,
  },
  {
    key: "2",
    label: "Shipping address",
    children: <p>Shipping address form here...</p>,
  },
  {
    key: "3",
    label: "Billing address",
    children: <p>Billing address form here...</p>,
  },
  {
    key: "4",
    label: "Review",
    children: <p>Order review here...</p>,
  },
];

<Collapse items={collapseItems} />;

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <Button className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center">
        <span role="img" aria-label="apple">🍏</span> Pay
      </Button>

      <div className="text-center my-4 text-gray-500">or</div>

      {/* Contact Information */}
      <h3 className="text-lg font-semibold">Contact information</h3>

      <Input placeholder="Example: name@mail.com" className="my-2" />
      <Input addonBefore="+1" placeholder="Example: 123 456 789" className="my-2" />

      <Checkbox className="my-3 text-sm text-gray-500">
        I have read the terms and conditions and agree to the sale of my personal information.
      </Checkbox>

      <Button className="w-full bg-gray-300 text-gray-500 py-2 mt-3" disabled>
        Continue
      </Button>

      {/* Expandable Sections */}
      
      <Collapse className="mt-4" items={collapseItems} />;
    </div>
  );
};

export default CheckoutForm;
