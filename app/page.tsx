import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="main-container">
      {/* <Hero />
      <About />
      <Work /> */}
      <Projects />
      <Tech />
      <Contact />
    </main>
  );
}
