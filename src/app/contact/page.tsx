import Contact from '@/sections/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
