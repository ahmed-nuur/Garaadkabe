import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={typewriterVariants}
        >
          <h1 className='text-3xl font-bold lg:text-6xl'>
            <Typewriter
              words={['Welcome to Garad Kab']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </motion.div>
        <motion.p
          className='text-gray-500 text-xs sm:text-sm'
          initial='hidden'
          animate='visible'
          variants={textVariants}
        >
          Here you'll find a variety of articles and tutorials on topics such as
          human development, motivation, success stories and brief articles on successful events etc.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to='/search'
            className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
          >
            View all posts
          </Link>
        </motion.div>
      </div>
      <motion.div
        className='p-3 bg-amber-100 dark:bg-slate-700'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <CallToAction />
      </motion.div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <motion.h2
              className='text-2xl font-semibold text-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Recent Posts
            </motion.h2>
            <motion.div
              className='flex flex-wrap gap-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Link
                to={'/search'}
                className='text-lg text-teal-500 hover:underline text-center'
              >
                View all posts
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}