import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link'; // Import the Link component
import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/people/191854139@N02/";
  const chatLink = "/chat";

  const controls = useAnimation();

  return (
    <Container>
      <div className="flex flex-col items-center mt-12">
        <motion.button 
          href={twitterLink}
          className="twitter-gradient py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={controls}
        >
          Follow me on Twitter
        </motion.button>
        <motion.button 
          href={flickrLink}
          className="flickr-gradient py-2 px-4 rounded mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={controls}
        >
          Visit my Flickr
        </motion.button>
        <Link href={chatLink}>
          <motion.button 
            className="chat-gradient py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controls}
          >
            Join the Chat
          </motion.button>
        </Link>
      </div>
    </Container>
  );
}

export default HomePage;
