import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6 bg-gray-900 text-white">
          <h1 className="text-2xl font-bold">
            Hi there! I'm Josh Perry, a new Software Developer at Company. I am excited about learning and working with
            cutting-edge tools like Next.js, and delivering efficient, user-friendly front-end experiences.
          </h1>
          <p>
            This portfolio, my first major project, is built with Next.js and a library called next-mdx.
            It allows me to concentrate on creating content while the library handles the details of rendering
            that content on the web.
          </p>

          <p>Take a look around to see what I've been working on, and what I'm learning next!</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
