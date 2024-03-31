import React from 'react';
import useForm from './hooks/useForm'; // useForm hook'unun bulunduğu dosyayı import edin

const FormComponent = () => {
  const [values, handleChange, reset] = useForm({
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Formun varsayılan gönderim davranışını önle
    console.log(values); // Form verilerini konsola yazdır

    if(values.firstName.length < 3) {
        alert("Ad 2 karakterden küçük olamaz")
        return
    }

    if(!values.city) {
        alert("Şehir seçilmelidir")
        return
    }

    reset(); // Formu sıfırla
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Ad:</label>
      <input
        id="firstName"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Soyad:</label>
      <input
        id="lastName"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />

      <div>
        <label>Cinsiyet:</label>
        <label htmlFor="male">Erkek</label>
        <input
          id="male"
          name="gender"
          type="radio"
          value="Erkek"
          checked={values.gender === "Erkek"}
          onChange={handleChange}
        />
        <label htmlFor="female">Kadın</label>
        <input
          id="female"
          name="gender"
          type="radio"
          value="Kadın"
          checked={values.gender === "Kadın"}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="city">Şehir:</label>
      <select name="city" value={values.city} onChange={handleChange}>
        <option value="">Seçiniz</option>
        <option value="İstanbul">İstanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="İzmir">İzmir</option>
        <option value="Antalya">Antalya</option>
        <option value="Bursa">Bursa</option>
      </select>

      <button type="submit">Gönder</button>
    </form>
  );
};

export default FormComponent;
