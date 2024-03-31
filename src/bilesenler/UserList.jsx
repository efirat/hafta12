import { useMemo, useState } from "react";

function uzunSurenIslemler(kullanicilar) {
  console.log("Hesaplama yapılıyor...");
  return (
    kullanicilar.reduce((acc, user) => acc + user.age, 0) / kullanicilar.length
  );
}

function UserList({ users: kullaniciListesi }) {
  const [filter, filtreGuncelle] = useState("");
  const [sayac,sayacGuncelle] = useState(0)

  // Filtrelenmiş kullanıcı listesini useMemo ile hesapla
  const filtrelenmisKullanicilar = useMemo(() => {
    return kullaniciListesi.filter((kullanici) =>
      kullanici.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [kullaniciListesi, filter]);

  // Maliyetli hesaplama işlemini yine useMemo kullanarak yap
  const ortalamaYas = useMemo(() => {
    return uzunSurenIslemler(filtrelenmisKullanicilar);
  }, [filtrelenmisKullanicilar]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => filtreGuncelle(e.target.value)}
        placeholder="Kullanıcıları filtrele"
      />

      <ul>
        {filtrelenmisKullanicilar.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <div>Ortalama Yaş: {ortalamaYas}</div>

      <button onClick={() => {sayacGuncelle(eskiDeger=>eskiDeger+5)}}>Sayıyı arttır : {sayac}</button>
    </div>
  );
}

export default UserList;
