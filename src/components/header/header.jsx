import './header.scss'
import logo from '../img/scoot.svg'
import React from 'react'

export default function Header() {
    let xref = React.useRef()

    return <>
        <header className="header">
            <div className="container">
                <a href="#link" className="header__logo">
                    <img src={logo} alt="log" className="header__pic" width={107} height={28} />
                </a>
                <nav className="header__nav">
                    <a href="#link" className="header__link">About</a>
                    <a href="#link" className="header__link">Location</a>
                    <a href="#link" className="header__link">Careers</a>
                </nav>
                <a href="#link" className="header__get" onClick={() => {
                    xref.current.classList.add('modal--open')
                }}>Get Scootin</a>
                <div className="modal" ref={xref}>
                    <div className="modal__inner">
                        <button className="btn" onClick={() => {
                            xref.current.classList.remove('modal--open')
                        }}>X</button>
                        <h2 className="modal__heading">
                            Tabriklaymiz Siz Modaldasiz
                        </h2>
                        <input className='email' type="email" placeholder='Email' />
                        <input className='email' type="text" placeholder='Username' />
                        <button className='submit' type='submit' > Submit</button>
                    </div>
                </div>
            </div>
        </header>
    </>
}
