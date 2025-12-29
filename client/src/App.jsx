import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import WhatWeBuy from './components/sections/WhatWeBuy';
import WhySell from './components/sections/WhySell';
import About from './components/sections/About';
import Guarantee from './components/sections/Guarantee';
import IntakeForm from './components/form/IntakeForm';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <WhatWeBuy />
        <WhySell />
        <About />
        <Guarantee />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
