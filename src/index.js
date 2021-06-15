import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StateProvider } from "./providers/StateProvider";
import reducer, { initialState } from "./reducers/reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
