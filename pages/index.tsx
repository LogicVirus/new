import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6 text-white">
          <h1 className="text-3xl font-bold text-yellow-300">
            Welcome to my Log!
          </h1>
          <p className="text-xl">
            Greetings, explorers! I'm Josh Perry. Here in this digital cosmos, I venture into the nebula of Next.js and transform binary frontiers into user-friendly galaxies.
          </p>
          <p className="text-xl">
            This interstellar hub, my first major foray into the coding universe, stands as a testament to my journey. Join me, as we engage warp drive and explore this ever-evolving tech universe together. 
          </p>
          <p className="text-xl">
            Initiate star chart plotting...our odyssey is about to begin!
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20 bg-gray-900">
        <Image
          src="/1.png"
          alt="A nebula signifying the uncharted territories of software development"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
