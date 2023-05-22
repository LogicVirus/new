import { useState } from 'react';
import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Container>
          <div className="space-y-6 text-white">
            <h1 className="text-3xl font-bold text-yellow-300">
              Welcome to my Log!
            </h1>
            <p className="text-xl">
              Greetings, explorers! I'm Josh Perry. 
            </p>
            <p className="text-xl">
              This interstellar hub, my first major foray into the coding universe, stands as a testament to my journey. Join me, as we engage warp drive and explore this ever-evolving tech universe together. 
            </p>
            <p className="text-xl">
              Initiate star chart plotting...our odyssey is about to begin!
            </p>
            <button onClick={toggleDarkMode} className="bg-yellow-300 hover:bg-yellow-400 py-2 px-4 rounded">
              Toggle Dark Mode
            </button>
          </div>
        </Container>

        <div className="container max-w-4xl m-auto mt-20 bg-gray-900">
          <Image
            src="/1.png"
            alt="A nebula signifying the uncharted territories of software development"
            width={1920 / 2}
            height={1280 / 2}
          />
        </div>

        <footer className="mt-10 text-center text-white">
          <p>Follow me on <a href="https://twitter.com/joshperry" target="_blank" rel="noopener noreferrer" className="text-yellow-300">Twitter</a></p>
        </footer>
      </div>
    </>
  )
}

export default HomePage
