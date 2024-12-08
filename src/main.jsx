import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import NameContextProvider from "./context/NameContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NameContextProvider>
      <App />
    </NameContextProvider>
  </BrowserRouter>
);
