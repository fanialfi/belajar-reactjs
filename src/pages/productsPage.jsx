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

const ProductPage = () => {
  return (
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
  )
}

export  default ProductPage;