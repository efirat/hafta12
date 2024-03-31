import { useState } from "react";

function useLS(anahtar, ilkDeger) { //içerisinde state ve useeffect kullanabiliriz
    const [storedValue, setStoredValue] = useState( () => {
        try {
          const item = window.localStorage.getItem(anahtar);
          if(!item) window.localStorage.setItem(anahtar, JSON.stringify(ilkDeger));
          return item ? JSON.parse(item) : ilkDeger;
        } catch (error) {
          console.log(error);
          return ilkDeger;
        }
      } );
    
      const setValue = (value) => {
        try {
          const valueToStore =
            value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          window.localStorage.setItem(anahtar, JSON.stringify(valueToStore));
        } catch (error) {
          console.log(error);
        }
      };
    
      return [storedValue, setValue];
}

export default useLS