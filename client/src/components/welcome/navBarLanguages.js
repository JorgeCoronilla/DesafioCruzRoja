import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const NavBarLanguages = () => {
    const { setDisplay } = useContext(CreateWelcomeContext);
    const close = () => {setDisplay("main")}

  return (
    <div>
            <div>
                    <div className='navBarCoverLanguage'>
                        <div><p onClick={close}> &#10094;</p></div>
                        <div><h6>Idioma</h6></div>
                    </div>

                    <div className='languages'>
                        <div className='laguageRow'>
                            <div>
                                <p>Español</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>English</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Árabe (العربية)</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Rumano (Română)</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Italiano</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Chino</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Alemán</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Francés</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Portugués</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                        <div className='laguageRow'>
                            <div>
                                <p>Ucraniano</p>   
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                        </div>
                        <hr className='rowLine'/>
                    </div>
                </div>
    </div>
  )
}
