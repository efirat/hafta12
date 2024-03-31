import { useEffect, useState } from "react";
/*
Kurallar
Custom hook dosyaları bir fonksiyon içerirler.
1- Fonksiyon isimlerinin başında mutlaka küçük harflerle "use" ifadesi yer almalıdır.
2- Dosya isimleri de .js uzantılı ve genellikle fonksiyon isimleriyle aynı olur.
3- Custom hooklar bir jsx döndürmez. JS verisi (boolean, string, number, array, function) döndürür

Özellikler:
Klasik fonksiyonlardan farklı olarak, custom hook fonksiynoları state ve useeffect kullanabilirler.

*/


/*
Bu custom hook, herhangi bir komponentin, ilk renderandan sonra bir API kaynağına bağlanarak veri cekmesini sağlar. 
*/
function useVeriCek(url){
    const [veri, veriGuncelle] = useState([])
    const [yukleniyor, yukleniyorGuncelle] = useState(true)
    const [hata, hataGuncelle] = useState("")

    useEffect(()=>{
        async function veriIslem(){
            try {
                const istek = await fetch(url) // URL'e istekte bulun
                const sonuc = await istek.json() // Gelen json verisini JS objesine cevir
                veriGuncelle(sonuc)
                yukleniyorGuncelle(false)
            } catch (hata) {
                hataGuncelle(hata.message)
                yukleniyorGuncelle(false)
            }
        }

        veriIslem();
    },[url])

    return{veri, yukleniyor, hata}
}

export default useVeriCek