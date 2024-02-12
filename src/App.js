import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Servicesec from './components/Servicesec';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Servicesec/>
      <Team/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
