import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/button";
import CardProduct from "../components/fragments/cardProduct";

const products = [
  {
    id:0,
    title:"sepatu baru gan",
    image:"https://source.unsplash.com/300x300?sepatu",
    description:"lorem ipsum dolor sit amet",
    price :"Rp. 1.000.000"
  },{
    id:1,
    title:"ini adalah tas sekolah",
    image:"https://source.unsplash.com/300x300?bag",
    description:"kamu bisa sekolah dengan menggunakan tas yang kece abis ini",
    price:"Rp. 200.000"
  }
]


const data = JSON.parse(localStorage.getItem("data"));

const ProductPage = () => {
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
  return (
   <>
   <nav className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 ">{data?.email}
   <Button classname="ml-5 bg-black " onClick={handleLogout}>Logout</Button>
   </nav>
     <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
        <CardProduct.Header image={product.image}/>
        <CardProduct.Body title={product.title}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price}/>
      </CardProduct>
      ))}
    </div>
   </>
  )
}

export  default ProductPage;