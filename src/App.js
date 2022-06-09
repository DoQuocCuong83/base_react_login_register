import React from "react";
import { Provider } from "react-redux";
import Routes from "./routers";
import { GlobalStyle } from "./global-style";
import { store } from "./store";
import { HelmetProvider } from "react-helmet-async";
import "font-awesome/css/font-awesome.min.css";
import "./tailwind.css";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <div className="max-width-992 mx-auto relative">
          <Routes />
        </div>
        <GlobalStyle />
      </HelmetProvider>
    </Provider>
  );
};

export default App;
