import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './components/account';
import { Error404 } from './components/error404';
import { Home } from './components/home';
import { Profile } from './components/profile';
import { Welcome } from './components/welcome';
import { ChangePass } from './components/welcome/changePass';
import { RegisterLanding } from './components/registerLanding';
import './sass/styles.scss'
import { CardOnList } from './components/profile/cardOnList';
import { Inbox } from './components/profile/inbox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <div>
        <Routes>

          {/*Inicio y registro*/}
          <Route path="/" element={<Welcome />} />
          <Route path="/registro/:token" element={<RegisterLanding/>} />
          <Route path="/change-pass/:token" element={<ChangePass/>} />

          {/*Home*/}
          <Route path="/home" element={<Home />} />

          {/*Perfil*/}
          <Route path="/profile" element={<Profile />} />

          {/*Cuenta*/}
          <Route path="/account" element={<Account />} />

          {/*Error 404*/}
          <Route path="*" element={<Error404 />} />


          <Route path="/test" element={<Profile />} />
          <Route path="/test2" element={<Inbox />} />

        </Routes>
      </div>
    </BrowserRouter>

);

