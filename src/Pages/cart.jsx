import { useEffect, useState } from "react";
import DataJson from "/src/assets/data.json";
import ProductCartLayout from "../components/Layouts/ProductCartLayout";
import CartHeader from "../components/Fragments/CartHeader";
import CartBody from "../components/Fragments/CartBody";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // teknik debouncing untuk memastikan function hanya di eksekusi
  // setelah serangkaian tindakan cepat atau berulang
  // dan hanya akan dijalankan sekali dalam jangka waktu tertentu
  function debouncingIncrementDecrement(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId); // hapus timer yang ada
      timeoutId = setTimeout(() => {
        // daftarkan timer yang baru
        func.apply(this, args); // jalankan function setelah delay
      }, delay);
    };
  }

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
    try {
      localStorage.setItem("cart", JSON.stringify(newCarts));
    } catch (error) {
      console.error(`error saat memparsing JSON ke string\nmessage : ${error}`);
    }
  };
  const debounceHandleDecrement = debouncingIncrementDecrement(handleDecrement, 300);

  const handleIncrement = function (id) {
    const newCarts = cart.map((crt) => (crt?.id == id ? { ...crt, qty: crt?.qty + 1 } : crt));

    console.log("button increment is called");
    setCart(newCarts);
    try {
      localStorage.setItem("cart", JSON.stringify(newCarts));
    } catch (error) {
      localStorage.setItem("cart", "[]");
      console.error(`error saat memparsing JSON ke string\nmessage : ${error}`);
    }
  };
  const debounceHandleIncrement = debouncingIncrementDecrement(handleIncrement, 300);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setCart(cart || []);
    } catch (error) {
      setCart([]);
      console.error(`error saat parsing string json\nmessage : ${error}`);
    }
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
            handleDecrement={debounceHandleDecrement}
            handleIncrement={debounceHandleIncrement}
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
