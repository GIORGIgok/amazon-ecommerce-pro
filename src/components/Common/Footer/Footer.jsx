import './Footer.css';
import footer_amazon_logo from '../../../assets/imgs/footer-amazon-logo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Footer() {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // hiding footer for some paths
    const location = useLocation();
    const pathsTohideFooter = [
        "/register",
        "/sign-in",
        "/checkout",
        "/buy-now",
    ]
    const hideFooter = pathsTohideFooter.includes(location.pathname);
    const footerStyle = { display: hideFooter ? "none" : "block"};

    return (
        <footer style={footerStyle}>
            <div className='footer-main-container'>
                {/* UPPER-HALF */}
                <div className='footer-upper-half'>
                    <span id='footer-back-to-top' onClick={handleBackToTop}>Back to top</span>
                    <div className='upper-text'>
                        <div id='item-1'>
                            <ul className='f-item-ul'>
                                <h2 className='f-item-heading'>Get to Know Us</h2>
                                <li><a href='//'>Careers</a></li>
                                <li><a href='//'>Blog</a></li>
                                <li><Link to="/about-us">{">"}About Amazon</Link></li>
                                <li><a href='//'>Investor Relations</a></li>
                                <li><a href='//'>Amazon Devices</a></li>
                                <li><a href='//'>Amazon Science</a></li>
                            </ul>
                        </div>
                        <div id='item-2'>
                            <ul className='f-item-ul'>
                                <h2 className='f-item-heading'>Make Money with Us</h2>
                                <li><a href='//'>Sell products on Amazon</a></li>
                                <li><a href='//'>Sell on Amazon Business</a></li>
                                <li><a href='//'>Sell apps on Amazon</a></li>
                                <li><a href='//'>Become an Affiliate</a></li>
                                <li><a href='//'>Advertise Your Products</a></li>
                                <li><a href='//'>Self-Publish with Us</a></li>
                                <li><a href='//'>Host an Amazon Hub</a></li>
                                <li><a href='//'>›See More Make Money with Us</a></li>
                            </ul>
                        </div>
                        <div id='item-3'>
                            <ul className='f-item-ul'>
                                <h2 className='f-item-heading'>Amazon Payment Products</h2>
                                <li><a href='//'>Amazon Business Card</a></li>
                                <li><a href='//'>Shop with Points</a></li>
                                <li><a href='//'>Reload Your Balance</a></li>
                                <li><a href='//'>Amazon Currency Converter</a></li>
                            </ul>
                        </div>
                        <div id='item-4'>
                            <ul className='f-item-ul'>
                                <h2 className='f-item-heading'>Let Us Help You</h2>
                                <li><a href='//'>Amazon and COVID-19</a></li>
                                <li><a href='//'>Your Account</a></li>
                                <li><a href='//'>Your Orders</a></li>
                                <li><a href='//'>Shipping Rates & Policies</a></li>
                                <li><a href='//'>Returns & Replacements</a></li>
                                <li><a href='//'>Manage Your Content and Devices</a></li>
                                <li><a href='//'>Amazon Assistant</a></li>
                                <li><a href='//'>Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* MIDDLE */}
                <div className='footer-middle'>
                    <div className='footer-middle-container'>
                        <figure>
                            <img id='f-middle-logo' src={footer_amazon_logo} alt='amazon' />
                        </figure>
                        <a id='f-middle-lang' href='/'>English</a>
                        <a id='f-middle-lang' href='/'>$ USD - U.S. Dollar</a>
                        <a id='f-middle-lang' href='/'>United States</a>
                    </div>
                </div>
                {/* LOWER-HALF */}
                <div className='footer-lower-half'>
                    <div className='footer-lower-container'>
                        <div className='f-lower-i-group'>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Music<br />Stream millionsof songs</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Advertising<br />Find, attract, and engage customers</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>6pm<br />
                                    Score deals
                                    on fashion brands</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>AbeBooks<br />
                                    Books, art
                                    & collectibles</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>ACX<br />
                                    Audiobook Publishing
                                    Made Easy</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Sell on Amazon<br />
                                    Start a Selling Account</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Business<br />
                                    Everything For
                                    Your Business</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>AmazonGlobal<br />
                                    Ship Orders
                                    Internationally</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Home Services<br />
                                    Experienced Pros
                                    Happiness Guarantee</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Ignite<br />
                                    Sell your original
                                    Digital Educational
                                    Resources</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Web Services<br />
                                    Scalable Cloud
                                    Computing Services</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Audible<br />
                                    Listen to Books & Original
                                    Audio Performances</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Book Depository<br />
                                    Books With Free
                                    Delivery Worldwide</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>
                                    Box Office Mojo<br />
                                    Find Movie
                                    Box Office Data</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>ComiXology<br />
                                    Thousands of
                                    Digital Comics DPReview
                                    Digital
                                    Photography</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>DPReview<br />
                                    Digital
                                    Photography</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Fabric<br />
                                    Sewing, Quilting
                                    & Knitting</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Goodreads<br />
                                    Book reviews
                                    & recommendations</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>IMDb<br />
                                    Movies, TV
                                    & Celebrities</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>IMDbPro<br />
                                    Get Info Entertainment
                                    Professionals Need</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Kindle Direct Publishing<br />
                                    Indie Digital & Print Publishing
                                    Made Easy
                                </a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Prime Video Direct<br />
                                    Video Distribution
                                    Made Easy</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Shopbop<br />
                                    Designer
                                    Fashion Brands</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Woot!<br />
                                    Deals and
                                    Shenanigans</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Zappos<br />
                                    Shoes &
                                    Clothing</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Ring<br />
                                    Smart Home
                                    Security Systems</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>eero WiFi<br />
                                    Stream 4K Video
                                    in Every Room</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Blink<br />
                                    Smart Security
                                    for Every Home </a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Neighbors App<br />
                                    Real-Time Crime
                                    & Safety Alerts </a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>Amazon Subscription Boxes<br />
                                    Top subscription boxes – right to your door</a>
                            </div>
                            <div className='footer-lower-cell'>
                                <a href='/' id='f-cell-text'>PillPack<br />
                                    Pharmacy Simplified</a>
                            </div>
                        </div>
                    </div>
                    <div className='f-copyright-wrapper'>
                        <div className='f-wrapper-upper'>
                            <a id='copyright-href-text' href=''>Conditions of Use</a>
                            <a id='copyright-href-text' href=''>Privacy Notice</a>
                            <a id='copyright-href-text' href=''>Your Ads Privacy Choices</a>
                        </div>
                        <div className='f-wrapper-lower'>
                            © 1996-2023, Amazon.com, Inc. or its affiliates
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer