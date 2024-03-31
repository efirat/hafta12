import { useEffect, useState } from "react"

function useBaglanti(){
    const [baglanti,baglantiGuncelle] = useState(navigator.onLine)

    useEffect(()=>{
        const zaman = setInterval(() => {
            baglantiGuncelle(navigator.onLine)
        }, 1000);

        return () => {clearInterval(zaman)}
    },[])

    return baglanti
}
export default useBaglanti