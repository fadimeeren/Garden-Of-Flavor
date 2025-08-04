// Api'a istek atacak fonsiyon

const getMenu = async () => {
    // Api'a istek at
  const response = await fetch("../db.json");

  // Api'den gelen veriyi JSON'dan Js nesnesine çevir
  const data = await response.json()
  console.log(data.menu);
};

export default getMenu;