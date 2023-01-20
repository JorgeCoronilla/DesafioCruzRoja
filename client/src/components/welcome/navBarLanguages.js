import React from 'react'
import spain from '../../media/españa.png'
import uk from '../../media/uk.png'
import arabe from '../../media/arabe.png'
import rumania from '../../media/rumania.png'
import italia from '../../media/italia.png'
import china from '../../media/china.png'
import alemania from '../../media/alemania.png'
import francia from '../../media/francia.png'
import portugal from '../../media/portugal.png'
import ucrania from '../../media/ucrania.png'
import check from '../../media/check.svg'

export const NavBarLanguages = ( { setDisplay }) => {
   
    const close = () => { setDisplay("main") }

    return (
        <div>
            <div>
                <div className='navBarCoverLanguage'>
                    <div><p onClick={close}> &#10094;</p></div>
                    <div><h6>Idioma</h6></div>
                </div>
                <div className='languagesContainer'>
                    <div className='languages'>
                        <div className='laguageRow'>
                            <div>
                                <p>Español</p>
                            </div>
                            <div>
                                <img src={spain} alt="Spanish flag" />
                            </div>
                        </div>
                        <div className='laguageRow'>
                            <div>
                                <p>Español</p>
                            </div>
                            <div>
                            <img src={check} className="checkLan" alt="check" />
                            <img src={spain} alt="Spanish flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>English</p>
                            </div>
                            <div>
                            <img src={uk} alt="uk flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Árabe (العربية)</p>
                            </div>
                            <div>
                            <img src={arabe} alt="arabic flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Rumano (Română)</p>
                            </div>
                            <div>
                            <img src={rumania} alt="Romanian flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Italiano</p>
                            </div>
                            <div>
                            <img src={italia} alt="Italian flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Chino</p>
                            </div>
                            <div>
                                <img src={china} alt="Chinese flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Alemán</p>
                            </div>
                            <div>
                                <img src={alemania} alt="German flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Francés</p>
                            </div>
                            <div>
                                <img src={francia} alt="French flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Portugués</p>
                            </div>
                            <div>
                                <img src={portugal} alt="Portuguese flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                        <div className='laguageRow'>
                            <div>
                                <p>Ucraniano</p>
                            </div>
                            <div>
                                <img src={ucrania} alt="Ukraine flag" />
                            </div>
                        </div>
                        <hr className='rowLine' />
                    </div>
                </div>
            </div>
        </div>
    )
}
