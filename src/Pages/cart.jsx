import { useEffect, useState } from "react";
import DataJson from "/src/assets/data.json";
import ProductCartLayout from "../components/Layouts/ProductCartLayout";
import CartHeader from "../components/Fragments/CartHeader";
import CartBody from "../components/Fragments/CartBody";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleDecrement = function (id) {
    const newCarts = cart.map((crt) => {
      switch (crt?.id) {
        case id:
          return crt?.qty > 1 ? { ...crt, qty: crt?.qty - 1 } : crt;
        default:
          return crt;
      }
    });

    console.log("button decrement is called");
    setCart(newCarts);
    localStorage.setItem("cart", JSON.stringify(newCarts));
  };

  const handleIncrement = function (id) {
    const newCarts = cart.map((crt) => (crt?.id == id ? { ...crt, qty: crt?.qty + 1 } : crt));

    console.log("button increment is called");
    setCart(newCarts);
    localStorage.setItem("cart", JSON.stringify(newCarts));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const productCart = cart.flatMap((item) => {
      return { ...DataJson.find((each) => item?.id == each?.id), ...{ qty: item?.qty } };
    });

    setProducts(productCart);
    console.log("useEffect hook is called because data cart is change");
  }, [cart]);

  return (
    <ProductCartLayout>
      <CartHeader />
      <CartBody products={products}>
        {products.map((item, index) => (
          <CartBody.cart
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            index={index}
            key={index}
            product={item}
            products={products}
          />
        ))}
      </CartBody>
    </ProductCartLayout>
  );
}
