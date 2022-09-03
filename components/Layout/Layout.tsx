import Head from 'next/head';
import { useRouter } from 'next/router';

//top header
import TopHeader from './TopHeader';

//navbar
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';

//footer
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Prototype.NEXT - Decentralized App & Cryptocurrency & Proof Of Ownership</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Prototype.NEXT - Build NextJS Application'
        />
        <meta
          name='og:title'
          property='og:title'
          content='Prototype.NEXT - Buy and Sell Cryptocurrency & NFT'
        ></meta>
        <meta
          name='twitter:card'
          content='Prototype.NEXT - Market Place for NFT-s, Secure Your Digital Products and Sell'
        ></meta>
        <link rel='canonical' href='https://www.prototypenext.com'></link>
      </Head>

      {pathname === '/' ? <TopHeader /> : ''}
      {pathname === '/index-2' ? <NavbarTwo /> : <Navbar />}
  
      {children}

      <Footer />
    </>
  );
};

export default Layout;
