
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/css/tailwind.css";
import "./assets/css/animate.css";
import "./assets/css/swiper-bundle.min.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
