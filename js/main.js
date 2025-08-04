import getMenu from "./api.js";

getMenu();



document.addEventListener("DOMContentLoaded", () => {

    if(window.location.pathname.includes("/index.html")){
        console.log(`Ana Sayfa`);
    }
    else {
        console.log(`Detay Sayfa`);
    }
});




