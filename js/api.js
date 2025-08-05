// Api'a istek atacak fonsiyon

const getMenu = async () => {
  try {
    // Api'a istek at
    const response = await fetch("../db.json");

    // Api'den gelen veriyi JSON'dan Js nesnesine çevir
    const data = await response.json();
    console.log(data.menu);

    // Gelen veri içerisindeki menu'yü return et
    return data.menu;
  } catch (error) {
    // Hata durununda kullanıcıya bildirim verir
    console.log(`Apı Hatası: ${error}`);
    // Eğer hata varsa geriye boş bir dizi dönder
    return[];
  }
};

export default getMenu;
