import getMenu from "./api.js";
import {renderMenuCard} from "./ui.js";

document.addEventListener("DOMContentLoaded", async() => {
    const menuData = await getMenu();
    console.log(menuData);

    if(window.location.pathname.includes("/index.html")){
        console.log(`Ana Sayfa`);
        renderMenuCard(menudata);
    }
    else {
        console.log(`Detay Sayfası`);
    }
});




