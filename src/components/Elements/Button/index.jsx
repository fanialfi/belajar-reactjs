import PropTypes from "prop-types";
import { forwardRef } from "react";

// menggunakan functional components ( stateless components )
// react component yang dibuat dengan menggunakan javascript function biasa,
// penamaannya harus dimulai dengan huruf kapital, jika tidak maka tidak akan berfungsi / bekerja
// component react menggunakan props untuk melakukan komunikasi antar components
// setiap parent component dapat memberikan informasi apapun ke child component dengan memberikan props tersebut ke child element
// penulisan nama props seperti yang ada di attribut html,
// lalu penangkapan nama props di react component bisa dengan langsung menuliskan props, atau langsung di destructuring ke nama properti nya
// jika tidak di destructuring, maka pengaksesannya degan cara menuliskan props.namaProperti

const ButtonFunc = forwardRef(({ type, children, onClick, typeButton = "button" }, ref) => {
  return (
    <button
      type={typeButton}
      className={`h-10 px-6 font-semibold rounded-md border ${type[0]} text-${type[1]} hover:shadow-md hover:shadow-slate-500 mx-4`}
      onClick={onClick}
      ref={ref}
    >
      {children || "..."}
    </button>
  );
});

ButtonFunc.displayName = "ButtonFunc";

// props validation
ButtonFunc.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeButton: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default ButtonFunc;
