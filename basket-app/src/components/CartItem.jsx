import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Typography } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";
import { removeItem, decreaseItemQuantity,increaseItemQuantity } from "host/store";

const { Title, Text } = Typography;

const CartItem = ({ id, title, price, image, color, size, quantity }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="shadow-md rounded-lg  w-full"
      styles={{
        body: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
        }, // ✅ Fix for horizontal layout
      }}
    >
      {/* 🖼 Part 1: Product Image (Left Side) */}
      <div className="w-1/3 sm:w-24 sm:h-24 flex-shrink-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
            No Image
          </div>
        )}
      </div>

      {/* 📋 Part 2: Product Details + Quantity Controls (Middle) */}
      <div className="w-2/3 ">
        {/* ✅ Title & Price in the Same Line */}
        <div className="flex justify-between items-center w-full">
          <Title level={5} className="font-semibold leading-tight">{title}</Title>
          <Text className="font-semibold text-lg">${price.toFixed(2)}</Text>
        </div>

        

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2 mt-2">
          <Button
            size="small"
            icon={<MinusOutlined />}
            onClick={() => dispatch(decreaseItemQuantity(id))}
            disabled={quantity <= 1}
          />
          <span className="font-semibold text-lg">{quantity}</span>
          <Button size="small" icon={<PlusOutlined />} onClick={() => dispatch(increaseItemQuantity(id))} />
        </div>

        {/* Remove Button */}
        <Button type="link" danger icon={<DeleteOutlined />} onClick={() => dispatch(removeItem(id))}>
          Remove
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
