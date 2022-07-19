import Image from 'next/image'

const OurFeature = ( { title }: { title?: string; } ) =>
{
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>{title}</h2>
            <p>
              NFTs is evolving at a rapid pace. Non-fungible tokens (NFTs) have revolutionized the way we think about digital assets, making their ownership legitimate and their sale secure
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                 <Image src='/images/features/features-img1.png' alt='Prototype.NEXT | Blockchain | web3.0 | NFT | Crypto' width={ 300 } height={300 } />
                <h3>Represent Ownership</h3>
                <p>
                  NFTs are tokens that you can use to represent ownership of your unique items. They let you tokenise things like art, collectibles, real estate, certificates...
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <Image src='/images/features/features-img2.png' alt='Prototype.NEXT | Blockchain | web3.0 | NFT | Crypto' width={ 300 } height={300 }/>
                <h3>NFTs as investment</h3>
                <p>
                  NFTs are digital assets that act as secure documentation of ownership and can be a worthwhile investment for collectors
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <Image src='/images/features/features-img3.png' alt='Prototype.NEXT | Blockchain | web3.0 | NFT | Crypto' width={ 300 } height={300 } />
                <h3>NFTs, help YOU to reach new audiences.</h3>
                <p>
                  Considered the new disruptor to the art market, NFTs are making waves in a sector previously occupied exclusively by traditional investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
