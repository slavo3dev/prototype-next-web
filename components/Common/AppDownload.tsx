import Image from "next/image";
const AppDownload = () => {
  return (
    <>
      <div className='app-download-area bg-f9f9f9'>
        <div className='container'>
          <div className='row align-items-center m-0'>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='app-download-image'>
                <Image src='/images/app.png' alt='Software Mobile/App Development' width={ 600 } height={400} />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='app-download-content'>
                <h2>Mobile Development with the power of<br />React Native</h2>
                <p>
                  React Native is great for mobile apps. It provides a slick, smooth and responsive user interface, while significantly reducing load time. It's also much faster and cheaper to build apps in React Native as opposed to building native ones, without the need to compromise on quality and functionality.
                </p>
                <div className='btn-box'>
                  <a href='/contact' className='playstore-btn' target='_blank'>
                    <img src='/images/play-store.png' alt='image' />
                    Deploy Your App | Constact us:
                    <span>Google Play</span>
                  </a>
                  <a href='/contact' className='applestore-btn' target='_blank'>
                    <img src='/images/apple-store.png' alt='image' />
                    Deploy Your App | Constact us:
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
