import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="pt-20">
        {/* Sections will go here */}
        <div className="section-container section-padding text-center">
          <h1 className="heading-1 text-cream">Crown & Karat</h1>
          <p className="mt-4 text-cream-muted">Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
