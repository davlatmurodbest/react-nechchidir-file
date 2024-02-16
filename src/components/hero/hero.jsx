import './hero.scss'
import line from '../img/Group.svg'

export default function Hero() {
    return <>
    <section className="hero">
        <div className="container">
            <div className="hero__info">
                <h1 className="hero__heading">Scooter sharing made simple</h1>
                <span className='hero__line'></span>
                <p className="hero__text">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <img src={line} alt="line" className='hero__pic' width={447} height={138} />
                <a href="#link" className="hero__get">Get Scootin</a>
            </div>
        </div>
    </section>
    </>
}