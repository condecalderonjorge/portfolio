import Hero from './components/hero.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <Hero />
      <Stack />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
