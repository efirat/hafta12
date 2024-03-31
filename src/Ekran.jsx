import useBaglanti from "./hooks/useBaglanti"
import useResize from "./hooks/useResize"

function Ekran() {
    const ekranBilgi = useResize()
    const baglantiVarmi = useBaglanti()

    if(ekranBilgi[0]<500)
        return <p style={{color:"red"}}>Uygulamayı en az 500px genişlikte görüntüleyebilirsiniz.</p>

    if(!baglantiVarmi)
        return <p style={{color:"red"}}>İnternet bağlantısı kesildi! Uygulamayı kullanmak için tekrar internete bağlanın.</p>

    return (

        <>
            <div>
                <strong>Genişlik : </strong> {ekranBilgi[0]}px <br/>
                <strong>Yükseklik : </strong> {ekranBilgi[1]}px <br/>
            </div>
        </>
    )
}

export default Ekran