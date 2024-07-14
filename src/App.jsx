import PropTypes from "prop-types";

// menggunakan class components ( statefull components )
// class ButtonClass extends React.Component {
//   render() {
//     return (
//       <button
//         type="button"
//         className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:shadow-md hover:shadow-slate-500"
//       >
//         Kirim
//       </button>
//     );
//   }
// }

const variants = {
  primary: ["bg-sky-500", "white"],
  secondary: ["bg-slate-500", "white"],
  success: ["bg-green-500", "white"],
  danger: ["bg-rose-500", "white"],
  warning: ["bg-yellow-500", "black"],
};

// menggunakan functional components ( stateless components )
// react component yang dibuat dengan menggunakan javascript function biasa,
// penamaannya harus dimulai dengan huruf kapital, jika tidak maka tidak akan berfungsi / bekerja
// component react menggunakan props untuk melakukan komunikasi antar components
// setiap parent component dapat memberikan informasi apapun ke child component dengan memberikan props tersebut ke child element
// penulisan nama props seperti yang ada di attribut html,
// lalu penangkapan nama props di react component bisa dengan langsung menuliskan props, atau langsung di destructuring ke nama properti nya
// jika tidak di destructuring, maka pengaksesannya degan cara menuliskan props.namaProperti
function ButtonFunc({ type, children }) {
  return (
    <button
      type="button"
      className={`h-10 px-6 font-semibold rounded-md ${type[0]} text-${type[1]} hover:shadow-md hover:shadow-slate-500`}
    >
      {children || "..."}
    </button>
  );
}

// props validation
ButtonFunc.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.any.isRequired,
};

function App() {
  return (
    <div className="flex items-center min-h-screen justify-center flex-col gap-4">
      <div className="p-4 shadow-lg rounded-md ">
        <h1 className="text-lg font-extrabold tracking-widest drop-shadow-md bg-gradient-to-r from-sky-500 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
          Hello World
        </h1>
        <p className="text-base font-serif tracking-wide text-slate-500">Lorem ipsum dolor sit amet.</p>
      </div>

      <p className="text-slate-500">
        disini penamaan / pemanggilan tag <code>p</code> dimulai menggunakan huruf kecil, jadi react tau kita ingin
        merujuk ke tag <strong>html</strong>
      </p>
      <div className="flex justify-around pt-4 gap-6 px-4 flex-wrap max-w-80">
        {/* dimulai dengan menggunakan huruf kapital, jadi react tau kita ingin menggunakan komponen milik sendiri (ButtonFunc) */}
        <ButtonFunc type={variants.primary}>Login</ButtonFunc>
        <ButtonFunc type={variants.warning}>Logout</ButtonFunc>
        <ButtonFunc type={variants.danger}></ButtonFunc>
      </div>
    </div>
  );
}

export default App;
