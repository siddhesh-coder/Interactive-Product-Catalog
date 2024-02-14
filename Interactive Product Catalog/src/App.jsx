import { Outlet } from "react-router-dom";
import InternetConnectionMessage from "./components/InternetConnectionMessage/InternetConnectionMessage";
import useOnlineStatus from "./hooks/useOnlineStatus";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <Auth0Provider
    domain="dev-xeajw2ik1j0su3ty.us.auth0.com"
    clientId="vlH4nmLUx8hhxKGoslHm2NePYAs5SzPL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <div className="container">
      {onlineStatus ? (
        <>
          <Navbar />

          <main>
            <Outlet />
          </main>

          {/* <Footer /> */}
        </>
      ) : (
        <InternetConnectionMessage />
      )}
    </div>
    </Auth0Provider>
  );
};

export default App;
