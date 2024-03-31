import { memo } from "react"

function C1({f1,veri}){
    console.log("C1 komponenti render olacak.")
    return(
        <div>
            Gelen veri: {veri}
            <hr/>
            <button onClick={()=>{f1("C1'den gelen uyarı!")}}>Uyarı Göster</button>
        </div>
    )
}
export default memo(C1); //memo : C1 komponentini sadece proplar degisirse render etmeye yarar