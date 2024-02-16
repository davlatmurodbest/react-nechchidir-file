import './footer.scss'
import play from '../img/Group28.png'
import footer from '../img/scootfooter.png'

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="container">
                <h4 className="footer__heading">Sign up and Scoot off today</h4>
                <div className="footer__market">
                    <a href="#link" className="footer__play">
                        <img src={play} alt="play" className="footer__img" />
                    </a>
                    <a href="#link" className="footer__play">
                        <img src={play} alt="play" className="footer__img" />
                    </a>
                </div>
            </div>
        </footer>
        <footer className="bottom">
            <div className="container">
                <a href="#link" className="bottom__link">
                    <img src={footer} alt="footer logo" className="bottom__pic" width={107} height={28} />
                </a>
                <nav className="header__nav">
                    <a href="#link" className="header__link">About</a>
                    <a href="#link" className="header__link">Location</a>
                    <a href="#link" className="header__link">Careers</a>
                </nav>
                <div className="bottom__pics">
                    <a href="#link" className="bottom__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#FCB72B" />
                        </svg>
                    </a>
                    <a href="#link" className="bottom__link">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 2.557C23.117 2.949 22.168 3.213 21.172 3.332C22.189 2.723 22.97 1.758 23.337 0.608001C22.386 1.172 21.332 1.582 20.21 1.803C19.313 0.846001 18.032 0.248001 16.616 0.248001C13.437 0.248001 11.101 3.214 11.819 6.293C7.728 6.088 4.1 4.128 1.671 1.149C0.381 3.362 1.002 6.257 3.194 7.723C2.388 7.697 1.628 7.476 0.965 7.107C0.911 9.388 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.106C22.505 4.411 23.34 3.544 24 2.557Z" fill="#FCB72B" />
                        </svg>
                    </a>
                    <a href="#link" className="bottom__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z" fill="#FCB72B" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </>
}