import Footer from '../components/globals/Footer';
import Navbar from '../components/globals/Navbar';

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
