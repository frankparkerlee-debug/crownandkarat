import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import WhatWeBuy from './components/sections/WhatWeBuy';
import WhySell from './components/sections/WhySell';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <WhatWeBuy />
        <WhySell />
      </main>
      <Footer />
    </div>
  );
}

export default App;
