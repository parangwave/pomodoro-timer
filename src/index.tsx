import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { RecoilRoot } from "recoil";
// style
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </>
);
