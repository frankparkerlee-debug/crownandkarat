import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
