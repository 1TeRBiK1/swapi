import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { store } from "./Store/store";

console.log("Check github: https://github.com/1TeRBiK1/swapi");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);
