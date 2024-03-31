import useVeriCek from "./hooks/useVeriCek";

function Yorumlar() {
  const kullaniciIstek = useVeriCek("https://jsonplaceholder.org/comments"); //{veri, yukleniyor, hata}

  if (kullaniciIstek.yukleniyor === true)
    return (
      <>
        <p>Veriler yükleniyor</p>
      </>
    );

  if (kullaniciIstek.hata !== "")
    return (
      <>
        <h2>HATA OLUŞTU</h2>
        <p>{kullaniciIstek.hata}</p>
      </>
    );


  return (
    <>
      <h2>Yorumlar</h2>
      <div>Toplam Kayıt: {kullaniciIstek.veri.length}</div>
      <hr/>
    </>
  );
}

export default Yorumlar;
