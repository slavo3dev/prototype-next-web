import Link from 'next/link';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image'

const Footer = () =>
{
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    setState("Loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setTimeout(() => {
        setState("idle");
      }, 900);

      setEmail("");
    } catch (e: any) {
      setErrorMsg(e.response.data.detail);
      setState("Error");
      setTimeout(() => {
        setState("idle");
      }, 900);
    }
  };
    
  return (
    <>
      <footer className='footer-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <a href='index.html' className='d-inline-block logo'>
                   <Image src='/images/prototype.next-logo.svg' alt='Prototype.NEXT Blog' height={ 50 } width={50} />
                </a>
                  <div className='newsletter-form'>
                  {state === "Success" && <h2>Awesome, you have been subscribed to Prototype.NEXT</h2> }  
                  {state === "Error" && <h1>"Oops Something went WORONG \nPlease Try Again or You are already a member !!!"</h1> }             
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <form data-toggle='validator'>
                    <input
                      type='email'
                      className='input-newsletter'
                      placeholder='Enter your email'
                      name='EMAIL'
                      required
                      autoComplete='off'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type='submit' onClick={handleSubscribe}>
                      Subscribe Now <i className='bx bx-paper-plane'></i>
                    </button>   
                    <div
                      id='validator-newsletter'
                      className='form-result'
                    ></div>
                  </form>
                </div>
                <ul className='social-links'>
                  <li>
                    <a href='https://www.facebook.com/prototypenext' target='_blank' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/slavo3dev' target='_blank' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/prototypenext' target='_blank' className='linkedin'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/slavo_3/' target='_blank' className='instagram'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className='col-lg-2 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Cryptocurrency</h3>
                <ul className='services-links'>
                  <li>
                    <Link href='/buy'>Buy Bitcoin</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy BNB</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ethereum</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ripple</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Litecoin</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>Resources</h3>
                <ul className='quick-links'>
                  <li>
                    <Link href='/trade'>Trade</Link>
                  </li>
                  <li>
                    <Link href='/guides'>Guides</Link>
                  </li>
                  <li>
                    <Link href='/wallet'>Wallets</Link>
                  </li>
                  <li>
                    <Link href='/faq'>FAQ</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Contact Info</h3>
                <ul className='footer-contact-info'>
                  <li>Address: 425, NE 22nd Street, Miami, Florida 33137</li>
                  <li>
                    Email: <a href='mailto:slavo@slavo3.com'>slavo@slavo.io</a>
                  </li>
                  <li>
                    Phone: <a href='tel:+7867024261'>+1-305-560-0950</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-area'>
          <div className='container'>
            <p>
              Copyright 2022 <strong>Prototype.Next</strong>. All Rights Reserved by{' '}
              <Link href='https://www.slavo.io/' target='_blank'>
                Slavo
            </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
