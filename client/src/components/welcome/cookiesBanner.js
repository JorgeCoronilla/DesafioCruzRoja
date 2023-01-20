import React from 'react'

export const CookiesBanner = ({ setCookiesOn }) => {
  const cookiesOff = () => {
    setCookiesOn(false);
  }
  return (
    <div className='cookiesBanner'>
      <h2>Tu privacidad</h2>
      <p>Utilizamos cookies para el análisis de los datos de nuestros visitantes,
        para mejorar nuestro sitio web, mostrar contenido personalizado y brindarle
        una excelente experiencia en el sitio web. Para obtener más información sobre
        la política de cookies que utilizamos, abre los ajustes. </p>
      <div className='loginSigninNtn'>
        <button className="vale" onClick={cookiesOff}>Vale</button>
        <button className="preferences">Preferencias de cookies</button>
      </div>
    </div>
  )
}
