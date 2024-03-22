import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/button";
import CardProduct from "../components/fragments/cardProduct";

const products = [
  {
    id:1,
    title:"sepatu baru gan",
    image:"https://source.unsplash.com/300x300?sepatu",
    description:"lorem ipsum dolor sit amet",
    price :1000000
  },{
    id:2,
    title:"ini adalah tas sekolah",
    image:"https://source.unsplash.com/300x300?bag",
    description:"kamu bisa sekolah dengan menggunakan tas yang kece abis ini",
    price:200000
  },{
    id:3,
    tile:"sepatu adadong",
    image:"https://source.unsplash.com/301x301?sepatu",
    description:"sepatu dari brand adadong",
    price:500000
  }
]


const data = JSON.parse(localStorage.getItem("data"));

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect adalah life cycle di stateless component
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  },[]) // dengan menggunakan dependency kosong, maka akan dianggap sebagai component did mount

  useEffect(()=>{
    if(cart.length > 0){
      const sum = cart.reduce((acc, cur) => {
        const product = products.find((product) => product.id == cur.id);
        return acc + product.price * cur.qty;
      },0);
      setTotalPrice(sum);
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  },[cart]) // dianggap sebagai component did update

  const navigate = useNavigate();
  useEffect(()=>{
    if(!data?.isLogin){
      navigate("/login");
    }
  }, [navigate])
  
  
  const handleLogout = () => {
    const newData = {
      email: data.email,
      password: data.password,
      isLogin: false,
    }
    localStorage.setItem("data",JSON.stringify(newData))
    window.location.href = "/login"
  }

  const handleAddToCart = (productId) => {
    if(cart.find((item) => item.id == productId)){
      setCart(
        cart.map((item) => item.id === productId ? {...item,qty:item.qty + 1} : item)
      )
    }else{
      setCart([...cart,{id:productId,qty:1}])
    }
  }

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current,{id:id,qty:1}]
    localStorage.setItem("cart",JSON.stringify(cartRef.current))
  }

  const totalPriceRef = useRef(null);
  useEffect(()=>{
    if(cart.length > 0){
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  },[cart])

  return (
   <>
   <nav className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 ">{data?.email}
   <Button classname="ml-5 bg-black " onClick={handleLogout}>Logout</Button>
   </nav>
     <div className="flex justify-center py-5">
      <div className="w-4/6 flex flex-wrap">
        {products.map((product) => (
        <CardProduct key={product.id}>
        <CardProduct.Header image={product.image}/>
        <CardProduct.Body title={product.title}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}/>
        </CardProduct>
        ))}
      </div>
      <div className="w-2/6">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
        <table className="text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find((product) => product.id == item.id)
              return (
                <tr key={item.id}>
                  <td>{product?.title}</td>
                  <td>{product?.price.toLocaleString('id-ID',{style:"currency",currency:"IDR"})}</td>
                  <td>{item?.qty}</td>
                  <td>{(item?.qty * product?.price).toLocaleString("id-ID",{style:"currency",currency:"IDR"})}</td>
                </tr>
              )
            })}
            <tr ref={totalPriceRef}>
              <td colSpan={3}><b>Total Price</b></td>
              <td><b>{totalPrice.toLocaleString("id-ID",{style:"currency",currency:"IDR"})}</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </>
  )
}

export  default ProductPage;