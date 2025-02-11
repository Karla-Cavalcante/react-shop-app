import React, { useState } from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import '../styles/App.css';


function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

 


  return (
    <Card className="p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="product-image" />
      <CardContent className="text-center">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="mb-2">${product.price}</p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
          <input 
            type="number" 
            value={quantity} 
            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
            className="w-12 text-center border rounded p-1" 
          />
          <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
        </div>
        <Button onClick={() => addToCart(product, quantity)} className="w-full bg-green-500 text-white">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}



export default ProductCard;