import './use.scss'
import img from '../img/Group33.png'
import line from '../img/Group32.png'

export default function Use() {
    return <>
    <section className="use">
        <div className="container">
            <div className="use__info">
                <h3 className="use__heading">Easy to use riding telemetry</h3>
                <p className="use__text">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                <a href="#link" className="use__btn">Learn more</a>
            </div>
            <img src={img} alt="pic" className="use__pic" width={445} height={445} />
            <img src={line} alt="line" className="use__pos" width={740} height={150} />
        </div>
    </section>
    </>
}