import useVeriCek from "./hooks/useVeriCek"

function Kullanicilar(){
    const kullaniciIstek = useVeriCek("https://jsonplaceholder.org/users") // {veri, yukleniyor, hata}

    if(kullaniciIstek.yukleniyor === true) 
        return <>
            <p>Veriler Yükleniyor...</p>
        </>

    if(kullaniciIstek.hata !== "") 
        return <>
            <h2>Hata Oluştu</h2>
            <p>{kullaniciIstek.hata}</p>
        </>
    

    return <>
        <h2>Kullanıcılar</h2>
        <div>Toplam Kayıt : {kullaniciIstek.veri.length}</div>
        <hr/>
    </>
}

export default Kullanicilar