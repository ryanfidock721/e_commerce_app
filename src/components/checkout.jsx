// src/components/checkout.jsx
import React, { useMemo, useState } from "react";
import { X, ShoppingBasket } from "lucide-react";

export function Checkout({ cart, setCart }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  })

  return (
    <div className='flex justify-center'>
        <div className='flex flex-row'>
            <div>
                {cart.map((product, i) => (
                    <div key={product.id} className="p-2 relative right-0 top-0 h-full w-84 bg-white">
                        
                    </div>
                ))}
            </div>
            <div>
                <h2>Other shit here</h2>
            </div>
        </div>
    </div>
  )}