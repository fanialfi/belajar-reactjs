import Button from "../elements/button"

function CardProduct({children}) {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  )
}

function Header({image}){
  return (
    <a href="#">
      <img src={image} className="p-8 rounded-t-lg" alt="product" />
    </a>
  )
}

function Body({title, children}){
  return (
    <div className="px-5 pb-5 h-full">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
            <p className="text-m text-white">{children}</p>
          </a>
        </div>
  )
}

function Footer({price}){
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">add to cart</Button>
    </div>
  )
}

// di javascript lebih tepatnya dalam konteks react
// sebuah function bisa dianggap sebagai sebuah object juga
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;