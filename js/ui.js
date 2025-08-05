// Arayüzden eleman çekme işlemini bir obje içerisinde yap
const uiElements = {
    manuList: document.querySelector("#menu-list"),
};
// Menu elemanı render edecek fonsiyon

const renderMenuCard = (data) => {
    // Dışarıdan alınan data'nın içerisindeki her eleman için bir html oluştur. 
const menuHtml= data.map((item)=>` <div class="col-md-6 col-lg-4 mb-4">
            <div class="card menu-card">
              
              <div class="position-relative">
                <img
                  src="http://127.0.0.1:5500/assets/item-1.jpg"
                  class="card-img-top"
                  alt="menu-image"
                />
                <span
                  class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 text-capitalize menu-card-badge"
                  >Breakfast</span
                >
                <span
                  class="badge bg-white text-success fw-bold position-absolute top-0 end-0 m-3 px-3 py-2 menu-card-price"
                  >$11</span
                >
              </div>
             
              <div class="card-body">
                <h5 class="card-title fw-bold text-success mb-2">Title</h5>
              </div>
            </div>
          </div>`)
          console.log(menuHtml);
};
export{uiElements, renderMenuCard};