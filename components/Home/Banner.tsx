import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Banner = () =>
{
    
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [ errorMsg, setErrorMsg ] = useState( null );
    
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
      <div className='banner-wrapper-area'>
        <div className='container'>
          <div className='row align-items-center m-0'>
            <div className='col-xl-5 col-lg-6 col-md-12 p-0'>
              <div className='banner-wrapper-content'>
                <span className='sub-title'>
                  We are Transforming your imagination into a Digital Product. <br />Improve your online business, and make a bigger impact
                </span>
                <h1>Prototype Your Digital Product</h1>
                <p>
                  Your technology partner for developing Web/Mobile applications.
                </p>
                              
                {state === "Success" && <p>Awesome, you have been subscribed to Prototype.NEXT</p> }
                <form data-toggle='validator'>
                  <input
                    type='email'
                    className='input-newsletter'
                    placeholder='Enter your Email or Phone'
                    name='EMAIL'
                    required
                    autoComplete='off'
                    onChange={(e) => { setEmail(e.target.value)}}             
                  />
                  <button type='submit' onClick={handleSubscribe}>
                    Subscribe <i className='bx bx-chevron-right'></i>
                  </button>
                  <div id='validator-newsletter' className='form-result'></div>
                </form>
              </div>
            </div>
            <div className='col-xl-7 col-lg-6 col-md-12 p-0'>
              <>
                <div className='banner-wrapper-image'>
                    <Image src='/images/banner/banner-img5.webp' alt='Prototype.NEXT - Image' width={ 600 } height={500} loading="lazy" />
                </div>
                    {state === "Error" &&  alert( "Oops Something went WORONG \nPlease Try Again or You are already a member !!!" ) } 
            </>             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
