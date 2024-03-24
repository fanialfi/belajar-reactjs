import Button from "../elements/button"

function CardProduct({children}) {
  return (
    <div className="w-full my-2 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  )
}

function Header({image}){
  return (
    <a href="#">
      <img src={image} className="p-8 rounded-t-lg h-60 w-full object-cover" alt="product" />
    </a>
  )
}

function Body({title, children}){
  return (
    <div className="px-5 pb-5 h-full">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0.20)} ....</h5>
            <p className="text-m text-white">{children.substring(0,100)}</p>
          </a>
        </div>
  )
}

function Footer({price, handleAddToCart,id}){
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">US$ {price.toLocaleString('id-ID',{styles:'currency',currency:"USD"})}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>add to cart</Button>
    </div>
  )
}

// di javascript lebih tepatnya dalam konteks react
// sebuah function bisa dianggap sebagai sebuah object juga
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;