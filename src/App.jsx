import lock from "./assets/lock.svg";

function App() {
  return (
    <div className="container max-w-xs shadow-xl rounded-lg mx-auto mt-28 md:max-w-xl">
      <div className="flex m-6 justify-between">
        <div>
          <h3 className="font-bold text-2xl text-slate-800">Client Login</h3>
          <p className="text-slate-600 text-base font-jersy">Enter your accoount details to login</p>
        </div>
        <div className="basis-1/4 grow-0 flex justify-end items-center">
          <img src={lock} alt="lock" className="h-12" />
        </div>
      </div>
      <form action="" className="flex flex-col p-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your business email"
          className="my-2 px-2 py-1 focus:outline-none ring-1 rounded ring-slate-400 focus:ring-2 focus:shadow-md md:max-w-sm peer invalid:text-pink-600 invalid:ring-pink-600"
        />
        <p className="text-pink-600 text-sm -mt-2 invisible peer-invalid:visible">email invalid</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          className="my-2 px-2 py-1 ring-1 rounded ring-slate-400 focus:outline-none focus:ring-2 focus:shadow-md md:max-w-sm"
        />
        <button
          type="submit"
          className="bg-sky-500 py-1 rounded-md shadow-lg hover:bg-sky-600 my-6 mx-4 text-white font-semibold text-lg md:inline md:px-4 md:items-start md:w-28 md:mx-0"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
