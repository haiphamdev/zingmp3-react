import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { Home, Login, Public } from "./containers/public";
import path from "./utils/path";

function App() {
  const { homeData } = useSelector((state) => state.app);

  console.log(homeData);

  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </div>
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
