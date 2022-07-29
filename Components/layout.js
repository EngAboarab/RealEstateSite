import Head from 'next/head';
import CustomeNav from '../Components/navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>real Estate </title>
      </Head>

      <header>
        <CustomeNav />
      </header>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
