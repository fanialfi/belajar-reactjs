import { useEffect, useState, useRef } from "react";
import DataJson from "/src/assets/data.json";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  // const [rounded, setRounded] = useState("");
  const cardProductSummaryRef = useRef([]);

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

  useEffect(() => {
    products.forEach((elm, idx) => {
      const cardProductSummary = cardProductSummaryRef.current[idx];
      const id = cardProductSummary?.id;
      const buttonIncrement = cardProductSummary.querySelector("#increment");
      const buttonDecrement = cardProductSummary.querySelector("#decrement");

      buttonIncrement.addEventListener("click", () => {
        const newCarts = cart.map((crt) => (crt?.id == id ? { ...crt, qty: crt?.qty + 1 } : crt));

        console.log("button increment is called");
        setCart(newCarts);
        localStorage.setItem("cart", JSON.stringify(newCarts));
      });

      buttonDecrement.addEventListener("click", () => {
        const newCarts = cart.map((crt) => (crt?.id == id ? { ...crt, qty: crt?.qty - 1 } : crt));

        console.log("button decrement is called");
        setCart(newCarts);
        localStorage.setItem("cart", JSON.stringify(newCarts));
      });
    });

    console.log("useEffect hook is called because data products is change");
  }, [products]);

  // useEffect(() => {
  // key itu bukan properti dari DOM, key di react hanyalah atribut khusus yang digunakan oleh react untuk mengidentifikasi element yang dihasilkan secara dinamis
  // dan ini nggak bisa diakses secara langsung melalui ref, karena key bukan dari properti DOM biasa
  //   const cartBoxRefIdx = cartBoxRef?.current?.key;

  //   if (cartBoxRefIdx == 1) {
  //     setRounded("rounded-t-lg");
  //   }
  // }, []);
  return (
    <div className="container w-full mx-auto  my-4 mt-20">
      <div className="p-4 ml-8">
        <h2 className="font-bold text-2xl font-sans">Keranjang</h2>
      </div>
      <div className="flex items-start justify-center gap-8 p-4">
        <div className="basis-3/4  p-2 rounded-lg">
          {/* daftar cart */}
          {products.map((item, index) => (
            // ref itu mengacu ke element tunggal dom, bukan ke setiap element yang dihasilkan oleh map
            // jika mengasih ref ke setiap element didalam map, maka semua element yang dihasilkan oleh map akan mencoba menggunakan ref yang sama, yang mana nggak akan bisa
            // ref di react nggak bekerja dengan element yang dihasilkan secara dinamis
            // <div ref={cartBoxRef} key={item?.id} className={`p-4 m-4 bg-slate-300 flex ${rounded}`}>
            //   <div className="w-20 bg-indigo-400 h-16 overflow-hidden rounded-md m-2">
            //     <img src={item?.image} className="object-cover w-full h-full" />
            //   </div>
            //   <div>
            //     <h4>{item?.title}</h4>
            //   </div>
            // </div>
            <div
              id={item?.id}
              ref={(elm) => (cardProductSummaryRef.current[index] = elm)}
              key={item?.id}
              className={`p-4 m-4 bg-slate-300 flex justify-stretch ${
                index === 0 ? "rounded-t-lg" : "" || index === products.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              <div className="w-20 h-16 overflow-hidden rounded-md m-2">
                <img src={item?.image} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col p-4 basis-3/5">
                <h4>{item?.title}</h4>
                <p>in stock</p>
              </div>
              <div className="p-2 basis-1/5 flex flex-col items-center gap-y-2">
                <p>{item?.price?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                <div className="flex items-center justify-around gap-x-4 p-1 border-white border-2 rounded-md">
                  <button id="decrement" className="font-bold text-lg p-3 py-1">
                    -
                  </button>
                  <p>{item?.qty}</p>
                  <button id="increment" className="font-bold text-lg p-3 py-1">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="basis-1/4 flex-none p-4 mt-6 rounded-lg bg-slate-300">
          <h3>Ringkasan Belanja</h3>
          <div>
            <div className="flex justify-between">
              <p>Total</p>
              <span>
                {products
                  .reduce((acc, cur) => cur?.price * cur?.qty + acc, 0)
                  .toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
