import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
