import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/error404';
import { Home } from './components/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>

          {/*Inicio y registro*/}
          <Route path="/" element={<Home />} />

          {/*Error 404*/}
          <Route path="*" element={<Error404 />} />

        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

