import React,{useState, useEffect} from 'react';
// import Link from '../../utils/ActiveLink';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () =>
{

 const router = useRouter();
 const [ showMenu, setshowMenu ] = useState( false )
    
    const activeLinkHome = router.pathname == "/" ? "active" : ""
    const activeLinkListening = router.pathname == "/prices" ? "active" : ""
    const activeLinkBlog = router.pathname == "/blog" ? "active" : ""

 const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div  id='navbar' className='navbar-area'>
        <div className='raimo-responsive-nav'>
          <div className='container'>
            <div className='raimo-responsive-menu'>
              <div onClick={() => toggleMenu()} className='hamburger-menu'>
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                    <Image src='/images/prototype.next-logo.svg' alt='Prototype.NEXT Blog' height={ 50 } width={50} />
                </Link>
              </div>


              <div className='responsive-others-option'>
                <div className='d-flex align-items-center'>
                  <div className='option-item'>
                    <Link className='login-btn' href='/authentication'>
                        <i className='bx bx-log-in'></i>
                    </Link>
                  </div>
                 
                  <div className='option-item'>
                    <select className='form-select'>
                      <option value='0'>English</option>
                      
                      {/* 
                      Add Languages in the future 
                      <option value='1'>Türkçe</option>
                      <option value='2'>Español</option>
                      <option value='3'>한국어</option>
                      <option value='4'>Italiano</option>
                      <option value='5'>Serbian</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={showMenu? 'show navbar navbar-expand-md navbar-light':'navbar navbar-expand-md navbar-light hide-menu'}>
          <div className='container'>
            <Link className='navbar-brand' href='/'>
                <Image src='/images/prototype.next-logo.svg' alt='Prototype.NEXT Blog' height={ 50 } width={50} />
            </Link>
            <div className='collapse navbar-collapse mean-menu'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className={`nav-link ${activeLinkHome}` } href='/'>
                    Home
                  </Link>
                  {/*
                  Adding !!!! Drop Down Menu !!!!
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link legacyBehavior 
                        href='/'
                        className='nav-link'
                        activeClassName='active'
                      >
                        <a className='nav-link'>Home Demo - 1</a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/index-2' activeClassName='active'>
                        <a className='nav-link'>Home Demo - 2</a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/index-3' activeClassName='active'>
                        <a className='nav-link'>Home Demo - 3</a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='#' activeClassName='active'>
                        <a className='dropdown-toggle nav-link'>Pages</a>
                      </Link>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <Link legacyBehavior  legacyBehavior  href='/trade' activeClassName='active'>
                            <a className='nav-link'>Trade</a>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link legacyBehavior  legacyBehavior  href='/leadership' activeClassName='active'>
                            <a className='nav-link'>Leadership Team</a>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link legacyBehavior  href='/privacy-policy' activeClassName='active'>
                            <a className='nav-link'>Privacy Policy</a>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link legacyBehavior 
                            href='/terms-condition'
                            activeClassName='active'
                          >
                            <a className='nav-link'>Terms & Conditions</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </li>
                {/* <li className='nav-item'>
                      <Link legacyBehavior  href='/about' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx'></i>
                          About Us
                        </a>
                      </Link>
                </li> */}
                {/* <li className='nav-item megamenu'>
                  <Link legacyBehavior  href='#' activeClassName='active'>
                    <a className='dropdown-toggle nav-link'>Buy</a>
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/buy'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency2.png'
                            alt='image'
                          />
                          BTC - Bitcoin
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/buy'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency3.png'
                            alt='image'
                          />
                          MIT - Litecoin
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/buy'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency4.png'
                            alt='image'
                          />
                          XRP - Ripple
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/buy'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency5.png'
                            alt='image'
                          />
                          STE - Stellar
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/cryptocurrency' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bxs-chevron-right-circle'></i>
                          View All Coins
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item megamenu'>
                  <Link legacyBehavior  href='#' activeClassName='active'>
                    <a className='dropdown-toggle nav-link'>Sell</a>
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/sell'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency4.png'
                            alt='image'
                          />
                          XRP - Ripple
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/sell'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency5.png'
                            alt='image'
                          />
                          STE - Stellar
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link legacyBehavior  href='/sell'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency2.png'
                            alt='image'
                          />
                          BTC - Bitcoin
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link legacyBehavior  href='/sell'>
                        <a className='nav-link'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency3.png'
                            alt='image'
                          />
                          MIT - Litecoin
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/cryptocurrency' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bxs-chevron-right-circle'></i>
                          View All Coins
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className='nav-item'>
                    <Link className={`nav-link ${ activeLinkListening }`} href='/prices'>
                    Listings
                 </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/blog' className={`nav-link ${ activeLinkBlog }`}>
                    Blog
                </Link>
                </li>
                {/* <li className='nav-item megamenu support'>
                  <Link legacyBehavior  href='/faq' activeClassName='active'>
                    <a className='dropdown-toggle nav-link'>Support</a>
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/faq' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-info-circle'></i>
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/guides' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-book'></i>
                          Guides
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/wallet' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-wallet'></i>
                          Wallets
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/about' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-group'></i>
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/contact' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-phone-call'></i>
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior  href='/affiliate' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-paper-plane'></i>
                          Affiliates
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <div className='others-option'>
                <div className='d-flex align-items-center'>
                  {/* <div className='option-item'>
                    <Link legacyBehavior  href='/authentication' activeClassName='active'>
                      <a className='login-btn'>
                        <i className='bx bx-log-in'></i> Login
                      </a>
                    </Link>
                  </div> */}
                  <div className='option-item'>
                    <Link href='/contact' className='default-btn' activeClassName='active'>
                        <i className='bx bxs-contact'></i> Contact Us
                    </Link>
                  </div>
                  <div className='option-item'>
                    <select className='form-select'>
                      <option value='0'>English</option>
                      {/*
                      Add Languages
                      <option value='1'>Türkçe</option>
                      <option value='2'>Español</option>
                      <option value='3'>한국어</option>
                      <option value='4'>Italiano</option>
                      <option value='5'>Polski</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
