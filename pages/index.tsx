import { useState, useEffect } from 'react';
import axios from 'axios';
import WordCloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css'; // optional for tooltips
import 'tippy.js/animations/scale.css'; // optional for tooltips
import { motion, useAnimation } from 'framer-motion';
import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/people/191854139@N02/";

  const controlsFlickr = useAnimation();
  const controlsTwitter = useAnimation();

  const [wordCloudData, setWordCloudData] = useState([]);

  useEffect(() => {
    const sequence = async (controls) => {
      await controls.start({
        opacity: [0.5, 1, 0.5, 1],
        transition: { duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66, 1] },
      });

      controls.start({
        opacity: 1,
        transition: { duration: 2 }
      });
    };

    sequence(controlsFlickr);
    sequence(controlsTwitter);
  }, [controlsFlickr, controlsTwitter]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4de4a8c952184ea7b39a2486f8e04390');
      const news = response.data.articles;
      const wordCount = {};

      news.forEach(article => {
        const words = article.title.split(' ');
        words.forEach(word => {
          wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
        });
      });

      const wordCloudArray = Object.keys(wordCount).map(word => ({ text: word, value: wordCount[word] }));
      setWordCloudData(wordCloudArray);
    };

    fetchNewsData();
    const interval = setInterval(fetchNewsData, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="space-y-6 text-white">
          <motion.h1 
            className="text-3xl font-bold text-blue-700"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Welcome to my Log!
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Greetings, explorers! I'm Josh Perry.
          </motion.p>
          <motion.button 
            onClick={() => window.open(twitterLink, "_blank")} 
            className="twitter-gradient py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controlsTwitter}
          >
            Follow me on Twitter
          </motion.button>
          <motion.button 
            onClick={() => window.open(flickrLink, "_blank")} 
            className="flickr-gradient py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controlsFlickr}
          >
            Visit my Flickr
          </motion.button>
          <div className="mt-10">
            <WordCloud words={wordCloudData} />
          </div>
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
    </motion.div>
  )
}

export default HomePage
