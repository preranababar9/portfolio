import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={50}><Work /></ScrollReveal>
      <ScrollReveal delay={50}><Projects /></ScrollReveal>
      <ScrollReveal delay={50}><Tech /></ScrollReveal>
      <ScrollReveal delay={50}><Contact /></ScrollReveal>
    </main>
  );
}
