import { useCallback, useState } from "react";
import C1 from "./bilesenler/C1";

function MemoOrnek() {
  const [sayac,sayacGuncelle] = useState(1)
  const deger = sayac % 5 === 0 ? sayac : "5 sayısının katı değil"


  //deger'e baglamazsak alert icerisindeki sayac degeri eski kalir.
  const uyariGoster = useCallback((uyari) => {
    alert(uyari + sayac);
  }, [deger]); //[] array bos birakilirsa sadece ilk renderdan sonra calisir icindeki veriler degismez


  return (
    <>
      Merhaba..
      <br/>Sayaç : {sayac}
      <hr/>
      <button onClick={()=>{sayacGuncelle(eskiDeger => eskiDeger+1)}}>Arttır</button>
      <hr/>
      <C1 f1={uyariGoster} veri={deger}/>
    </>
  );
}

export default MemoOrnek;
