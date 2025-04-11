import Navbar from './components/Navbar';
import Header from './components/Header'; // Replaces Profile
import Profile from './pages/Profile';
import About from './pages/About';
import Experience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Header />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
