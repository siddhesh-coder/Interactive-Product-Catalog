import { Outlet } from "react-router-dom";
import InternetConnectionMessage from "./components/InternetConnectionMessage/InternetConnectionMessage";
import useOnlineStatus from "./hooks/useOnlineStatus";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/Context/cart_context";
import { ToastContainer } from "react-toastify";

const App = () => {
  const onlineStatus = useOnlineStatus();

  return (<>
      <CartProvider>
        {onlineStatus ? (
          <>
            <Navbar/>
            <Outlet />
            <Footer />
          </>
        ) : (
          <InternetConnectionMessage />
        )}
      </CartProvider>
      <ToastContainer/>
      </>
  );
};

export default App;
