import React from 'react'
import './app.scss'
import icons from '../img/Group8.svg'

export default function Appme() {
    return <>
        <section className="app">
            <div className="container">
                <span className="app__line"></span>
                <ul className="app__list">
                    <li className="app__item">
                        <img src={icons} alt="icon" className="app__pic" width={96} height={96} />
                        <h2 className="app__heading">Locate with app</h2>
                        <p className="app__text">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                    </li>
                    <li className="app__item">
                        <img src={icons} alt="icon" className="app__pic" width={96} height={96} />
                        <h2 className="app__heading">Locate with app</h2>
                        <p className="app__text">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                    </li>
                    <li className="app__item">
                        <img src={icons} alt="icon" className="app__pic" width={96} height={96} />
                        <h2 className="app__heading">Locate with app</h2>
                        <p className="app__text">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                    </li>
                </ul>
            </div>
        </section>
    </>
}