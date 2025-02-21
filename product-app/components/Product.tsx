import React from "react";
import { Card, Badge, Rate, Button } from "antd";
import "tailwindcss/tailwind.css";
import { addItem, AppDispatch } from "host/store";
import { useDispatch } from "react-redux";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const Product: React.FC<ProductProps> = ({ id, title, price, image, category, description, rating }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Badge.Ribbon text="New" color="blue">
      <Card
        className="shadow-md rounded-lg overflow-hidden p-4 transition-transform duration-300 transform hover:scale-105"
        key={id}
        hoverable
        cover={
          image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={title} className="h-48 w-full object-cover sm:h-56 md:h-64" />
          ) : (
            <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">No Image</span>
            </div>
          )
        }
      >
        {/* Category */}
        <p className="text-gray-500 text-xs sm:text-sm">{category}</p>
        
        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{description}</p>

        {/* Rating */}
        {rating && (
          <div className="flex items-center mt-2">
            <Rate allowHalf disabled defaultValue={rating.rate} className="text-yellow-500 text-xs sm:text-sm" />
            <span className="text-xs sm:text-sm text-gray-500 ml-2">({rating.count})</span>
          </div>
        )}

        {/* Price */}
        <p className="text-lg sm:text-xl font-bold mt-2">${price.toFixed(2)}</p>
        <Button
          type="primary"
          className="w-full mt-3"
          onClick={() => dispatch(addItem({ id, title, price, image, category, description, rating }))}
        >
          Add to Basket
        </Button>
      </Card>
    </Badge.Ribbon>
  );
};

export default Product;
