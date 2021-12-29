const Banner = () => {
  return (
    <>
      <div className='banner-wrapper-area'>
        <div className='container'>
          <div className='row align-items-center m-0'>
            <div className='col-xl-5 col-lg-6 col-md-12 p-0'>
              <div className='banner-wrapper-content'>
                <span className='sub-title'>
                  Smart Contracts are self-verifying due to automated possibilities <br />Apply to Your Business
                </span>
                <h1>A Trusted & Secure Decentralized Apps</h1>
                <p>
                  Your technology partner for developing peer-to-peer Decentralized Apps.
                </p>
                <form data-toggle='validator'>
                  <input
                    type='email'
                    className='input-newsletter'
                    placeholder='Enter your Email or Phone'
                    name='EMAIL'
                    required
                    autoComplete='off'
                  />
                  <button type='submit'>
                    Get Started <i className='bx bx-chevron-right'></i>
                  </button>
                  <div id='validator-newsletter' className='form-result'></div>
                </form>
              </div>
            </div>
            <div className='col-xl-7 col-lg-6 col-md-12 p-0'>
              <div className='banner-wrapper-image'>
                <img src='/images/banner/banner-img3.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
