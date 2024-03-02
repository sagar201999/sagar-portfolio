import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Cursor from './Components/Cursor';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Blogs />
        <Contact />
        <Footer />
        {/* <Cursor /> */}
      </div>
    </ParallaxProvider>

  );
}

export default App;
