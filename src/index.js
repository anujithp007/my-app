import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';
import Reg from './Reg';
import Login from './Login';
import Navi from './Navi';
import { Provider } from 'react-redux';
import { store } from './store';
import A from './A';
import B from './B';
import C from './C';
import Theme from './Theme';
import { Themeprovider } from './Themecont';
import Language from './LanguageChange';
import { I18nextProvider } from 'react-i18next';
import i18n from './language';
import Memo from './Memo';
import Axios1 from './Axios1';
import Update from './Update';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>

      <Themeprovider>
        


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navi/>}>
        <Route path='a/:id' element={<A/>}/>
        <Route path='b' element={<B/>}></Route>
        <Route path='c' element={<C/>}/>
        
    <Route path='login' element={<Login/>}/>
    <Route path='registration' element={<Reg/>}/>
    <Route path='memo' element={<Memo/>}/>
    <Route path='theme' element={<Theme/>}/>
    <Route path='language' element={<Language/>}></Route>
    <Route path='view' element={<Axios1/>}></Route>
    <Route path='update/:id' element={<Update/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
      </Themeprovider>
      </I18nextProvider>
    </Provider>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
