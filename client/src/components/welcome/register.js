import React from 'react'

export const Register = () => {
  return (
    
    <div>
            <div className="register-header">
                <div className="register-block">
                    <img className="logo-center" src="https://www2.cruzroja.es/o/cruzroja-web-theme/images/CR-ES-Horizontal-RGB-recortada.png" width="250" alt="" />
                    <h2>Registro</h2>
                </div>
            </div>
            <div className='form-container'>
                <form onSubmit="">
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="nombre" required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="pass" required />
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
  )
}
