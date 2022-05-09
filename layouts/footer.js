import config from '../config/app'
import moment from 'moment';

const Footer = (props) => {
    
    const {env,environments} = config;
    const {assetsPath} = environments[env];
    const currentYear = moment().format('YYYY');

    return (
        <footer className="footer-main">
            <div className="">
                <div className="footer-inr">
                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <div className="get-app-ftr">
                                <a href="https://itunes.apple.com/se/app/ryoulive/id984492366?l=en&mt=8">
                                    <img src={`${assetsPath}/images/apple-store-btn.svg`} alt="" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.ryoulive.app&hl=en">
                                    <img src={`${assetsPath}/images/google-play-new.svg`} alt="" />
                                </a>
                            </div>
                            <ul className="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/ryoulive/" target="_blank">
                                        <img src={`${assetsPath}/images/facebook-icon.png`} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ryoulive/" target="_blank">
                                        <img src={`${assetsPath}/images/insta-icon.png`} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ryoulive" target="_blank">
                                        <img src={`${assetsPath}/images/twitter-icon.png`} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCJY9WrcpnEmiSnAtCVOCoaw" target="_blank">
                                        <img src={`${assetsPath}/images/youtube-icon.png`} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="copyright-div">
                                <p>© {currentYear} RYOULIVE</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-links">
                                <ul>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/terms">Terms and Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/privacy">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;