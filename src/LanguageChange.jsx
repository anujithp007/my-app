
import React from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
const {t,i18n}=useTranslation();
console.log(i18n.changeLanguage);
const changeLanguage=(lng)=>{
  console.log(lng);
    i18n.changeLanguage(lng);
    console.log(i18n.changeLanguage);
    
}

  return (
    <div>
      <h1>{t('Hello World')}</h1>
      <p>{t('Have A Great Day')}</p>
      <button onClick={()=>changeLanguage("en")}>English</button>
      <button onClick={()=>changeLanguage("es")}>Spanish</button>
      <button onClick={()=>changeLanguage("fr")}>French</button>
      
      <button onClick={()=>changeLanguage("ml")}>Malayalam</button>
    </div>
  )
}

export default Language
