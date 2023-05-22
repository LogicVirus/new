import { Html, Head, Main, NextScript } from 'next/document'
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'

function HomePage() {
  return (
    <Html lang="en" className="bg-gray-200">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <body className="text-gray-700 antialiased">
        <Container>
          <div className="space-y-6">
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

        <Container>
          <h2 className="text-xl font-bold my-4">Recent Blog Posts</h2>
          <div>
            <Link href="/blog/post1">
              <a>Post 1</a>
            </Link>
          </div>
          <div>
            <Link href="/blog/post2">
              <a>Post 2</a>
            </Link>
          </div>
        </Container>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
 
export default HomePage
