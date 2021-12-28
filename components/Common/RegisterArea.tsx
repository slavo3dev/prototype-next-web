import Link from 'next/link';

interface RegisterProps {
  bgGradient?: string;
  blackText?: string;
  ctaImage?: string;
}

const RegisterArea: React.FC<RegisterProps> = ({
  bgGradient,
  blackText,
  ctaImage,
}) => {
  return (
    <>
      <div className={`cta-area pt-100 ${bgGradient}`}>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className={`cta-content ${blackText}`}>
                <h2>Coming Soon<br/>Start Selling NFTs<br /> on Prototype.Next</h2>
                <p>
                 The first step to being a crypto artist is knowing how to create digital works of art, or works created with the use of computers and software, which can be reproduced on digital media. These can be GIFs, MP4 Videos or simple images, or motion graphics, 3D creations or even real and digitized works. Create your Portfolio that knows how to best tell your digital art.
                </p>
                <Link href='https://www.prototypenext.com'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Register Now
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='cta-image'>
                <img src={ctaImage} alt='image' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape6'>
          <img src='/images/shape/shape6.png' alt='image' />
        </div>
        <div className='shape7'>
          <img src='/images/shape/shape7.png' alt='image' />
        </div>
        <div className='shape8'>
          <img src='/images/shape/shape8.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
        <div className='shape15'>
          <img src='/images/shape/shape15.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
