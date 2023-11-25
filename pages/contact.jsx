import { useState, useEffect } from "react";
import { PageBanner, Notification } from '../components';
import { notificationStatus, storeData } from "lib";
import Form from 'react-bootstrap/Form';

const Contact = () =>
{

    const [ payload, setPayload ] = useState( {
      terms: "no"
  } );
  const [reqStatus, setReqStatus] = useState('');
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const sendPayload = async (e, data) => {
    e.preventDefault();

    setReqStatus("pending");

    const res = await storeData(data);

    if (res.data.message === "Succesfuly Stored") {
      setReqStatus("success");
    } else {
      setReqStatus("error");
      setReqError(null);
    }
  };

  let notification = notificationStatus(reqStatus);
    
  return (
    <>
      <PageBanner
        pageTitle='Contact Us'
        pageSubTitle='Contact us with your details & ready to start with us.'
      />

      <div className='contact-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-12 col-md-12'>
              <div className='contact-info'>
                <h3>Contact Address:</h3>
                <p>
                  Contact us with your details & ready to start with us. Get In
                  Touch!
                </p>
                <ul className='contact-list'>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-support'></i>
                    </div>
                    <p>
                      <a href='tel:+7867024261'>+1-786-702-4261</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-globe'></i>
                    </div>
                    <p>
                      <a href='mailto:slavo@slavo3.com'>slavo@slavo3.com</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-map'></i>
                    </div>
                    <p>425 NE 22nd Street, Miami, Florida 33137</p>
                  </li>
                </ul>
                <ul className='social-links'>
                  <li>
                    <a href='#' target='_blank' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='linkedin'>
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
            {/* <div className='col-xl-8 col-lg-12 col-md-12'>
              <div className='maps'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd'></iframe>
              </div>
            </div> */}
          </div>
          <div className='contact-form'>
            <div className='section-title'>
              <h2>Get In Touch!</h2>
              <p>
                Let’s create something together. Let’s chat. Tell me about your project
              </p>
            </div>
            <form id='contactForm'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                      data-error='Please enter your name'
                      placeholder='Eg: Sarah Taylor'
                      onChange={(e) => setPayload((prevState) => ({...prevState, name: e.target.value }))}
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      required
                      data-error='Please enter your email'
                      placeholder='hello@sarah.com'
                      onChange={(e) =>
                        setPayload((prevState) => ({
                                ...prevState,
                                email: e.target.value,
                            }))}
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='phone_number'
                      className='form-control'
                      id='phone_number'
                      required
                      data-error='Please enter your phone number'
                      placeholder='Enter your phone number'
                      onChange={(e) => setPayload((prevState) => ({ ...prevState, phone_number: e.target.value}))}
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='msg_subject'
                      className='form-control'
                      id='msg_subject'
                      placeholder='Enter your subject'
                      required
                      data-error='Please enter your subject'
                      onChange={(e) => setPayload((prevState) => ({ ...prevState, subject: e.target.value}))}                   
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      cols={30}
                      rows={6}
                      required
                      data-error='Please enter your message'
                      placeholder='Enter message...'
                      onChange={(e) => setPayload((prevState) => ({ ...prevState, message: e.target.value}))} 
                    ></textarea>
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                <Form.Check value={payload.terms} type="checkbox" id="custom-switch" label="Please, Confirm That you Agree to send message" onChange={(e) => setPayload((prevState) => ({ ...prevState, terms: payload.terms === "no" ? 'accept' : "no"})) } />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <button type='submit' className='default-btn' onClick={(e) => { payload.terms === "accept" ? sendPayload(e, payload) : alert("Please, Mark Accept Terms Box!!") }}>
                  <i className='bx bx-paper-plane'></i> Send Message
                  </button>
                  <div id='msgSubmit' className='h3 text-center hidden'></div>
                  <div className='clearfix'></div>
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
};

export default Contact;
