import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemoOrnek from './MemoOrnek';
import UMemo from './bilesenler/UMemo';
import Kullanicilar from './Kullanicilar';
import Yazilar from './Yazilar';
import Yorumlar from './Yorumlar';
import Sayac from './Sayac';
import Ekran from './Ekran';
import FormComponent from './FormComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <FormComponent />
    </>
    //<Ekran />
    //<Sayac />
    //<Kullanicilar />
    //<Yazilar />
    //<Yorumlar />
    //<UMemo />
    //<MemoOrnek />
);
