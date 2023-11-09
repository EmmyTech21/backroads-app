import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Tours from './Components/Tours';
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Service />
    <Tours />
    <Footer />
    </>
  );
}
export default App;
