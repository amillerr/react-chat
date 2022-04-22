import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";
import reportWebVitals from './reportWebVitals';

import App from "./App";

import "./css/style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

WebFontLoader.load({
    google: {
        families: ["Open Sans:300,400,700"],
    },
});

dayjs.locale("ru");

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);

reportWebVitals();