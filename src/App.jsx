import { useSelector } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const { homeData } = useSelector((state) => state.app);

  console.log(homeData);

  return (
    <>
      App
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
