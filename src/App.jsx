import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Recruiters from './sections/Recruiters';
import PlacementStats from './sections/PlacementStats';
import Reports from './sections/Reports';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PlacementStats />
        <Recruiters />
        <Reports />
        <Gallery />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
