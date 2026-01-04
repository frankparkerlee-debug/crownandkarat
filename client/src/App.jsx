import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import WhatWeBuy from './components/sections/WhatWeBuy';
import WhySell from './components/sections/WhySell';
import About from './components/sections/About';
import Guarantee from './components/sections/Guarantee';
import BrandMarquee from './components/sections/BrandMarquee';
import FAQ from './components/sections/FAQ';
import Testimonials from './components/sections/Testimonials';
import IntakeForm from './components/form/IntakeForm';

function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <BrandMarquee />
        <HowItWorks />
        <WhatWeBuy />
        <WhySell />
        <About />
        <Guarantee />
        <FAQ />
        <Testimonials />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
