import "./style.css";
import { home } from "./pages/home";
import { menu } from "./pages/menu";
import { about } from "./pages/about";

const main = (function () {
    const content = document.getElementById("content");
    document.getElementById("home-btn").addEventListener("click", () => {
        content.innerHTML = home();
    });
})();