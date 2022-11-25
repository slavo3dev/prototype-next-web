import React from 'react';
import Link from 'next/link';

interface BannerProps {
  pageTitle?: string;
  pageSubTitle?: string;
  button?: boolean;
}

export const PageBanner: React.FC<BannerProps> = ({
  pageTitle,
  pageSubTitle,
  button,
}) => {
  const [showBUtton, setShowButton] = React.useState(button);

  return (
    <>
      <div className='page-title-area'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>{pageTitle}</h1>
            <p>{pageSubTitle}</p>
            {showBUtton && (
              <Link className='default-btn' href='https://www.coinbase.com/accounts'> 
                  <i className='bx bxs-user'></i> Become an Affiliate
              </Link>
            )}
          </div>
        </div>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
};


