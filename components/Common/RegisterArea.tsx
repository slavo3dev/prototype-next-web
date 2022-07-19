import Link from 'next/link';
import Image from 'next/image'

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
                <h2>Protect Your Work with <br/> NFT (non-fungible tokens) </h2>
                <p>
                 The first step to being a crypto artist is knowing how to create digital works of art, or works created with the use of computers and software, which can be reproduced on digital media. These can be GIFs, MP4 Videos or simple images, or motion graphics, 3D creations or even real and digitized works. Create your Portfolio that knows how to best tell your digital art.
                </p>
                <Link href='/contact'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Register Now
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='cta-image'>
                <Image src={ ctaImage } alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 500 } height={ 500 } />
              </div>
            </div>
          </div>
        </div>
        <div className='shape6'>
          <Image src='/images/shape/shape6.png' alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 50 } height={ 50 } />
        </div>
        <div className='shape7'>
          <Image src='/images/shape/shape7.png' alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 40 } height={ 40 } />
        </div>
        <div className='shape8'>
          <Image src='/images/shape/shape8.png' alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 100 } height={ 100 } />
        </div>
        <div className='shape9'>
          <Image src='/images/shape/shape9.png' alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 150 } height={ 150 } />
        </div>
        <div className='shape15'>
            <Image src='/images/shape/shape15.png' alt='Prototype.NEXT | Crypto | BlockChain Development | Web3.0 |' width={ 150 } height={ 150 } />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
