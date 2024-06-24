import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectCallToAction from '../components/ProjectCallToAction';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentPosts();
  }, []);

  useEffect(() => {
    if (post) {
      const fetchRelatedPosts = async () => {
        try {
          const res = await fetch(`/api/post/getposts?category=${post.category}&limit=3`);
          const data = await res.json();
          if (res.ok) {
            setRelatedPosts(data.posts.filter(p => p.slug !== postSlug));
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchRelatedPosts();
    }
  }, [post, postSlug]);

  const handleLoadMore = async () => {
    try {
      const res = await fetch(`/api/post/getposts?limit=${recentPosts.length + 3}`);
      const data = await res.json();
      if (res.ok) {
        setRecentPosts(data.posts);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );

  if (error)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p>Error loading post.</p>
      </div>
    );

  const shareUrl = window.location.href;
  const title = post && post.title;

  return (
    <main className='p-3 flex flex-col lg:flex-row max-w-6xl mx-auto min-h-screen gap-10'>
      <div className='w-full lg:w-3/4 lg:pr-10'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          {post && post.title}
        </h1>
        <Link
          to={`/search?category=${post && post.category}`}
          className='self-center mt-5'
        >
          <Button color='gray' pill size='xs'>
            {post && post.category}
          </Button>
        </Link>
        <img
          src={post && post.image}
          alt={post && post.title}
          className='mt-10 p-3 max-h-[600px] w-full object-cover rounded-lg shadow-lg'
        />
        <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className='italic'>
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div className='flex items-center my-5'>
          <img
            src={post && post.author?.profilePicture}
            alt={post && post.author?.name}
            className='w-12 h-12 rounded-full mr-4'
          />
          <div>
            <h3 className='text-lg font-semibold'>{post && post.author?.name}</h3>
            <p className='text-sm'>{post && post.author?.bio}</p>
          </div>
        </div>
        <div
          className='p-3 max-w-3xl mx-auto w-full post-content'
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        />
        <div className='flex flex-wrap gap-2 mt-5'>
          {post && post.tags?.map(tag => (
            <span
              key={tag}
              className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm'
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className='max-w-4xl mx-auto w-full mt-10'>
          <ProjectCallToAction />
        </div>
        <div className='flex justify-center my-5'>
          <FacebookShareButton url={shareUrl} quote={title} className='mx-2'>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title} className='mx-2'>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={title} className='mx-2'>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <div className='bg-gray-100 p-5 rounded-lg shadow-md mt-10'>
          <h2 className='text-2xl font-semibold mb-5'>Advice & Tips</h2>
          <ul className='list-disc list-inside'>
            {post && post.advice?.map((tip, index) => (
              <li key={index} className='mb-2 text-gray-700'>{tip}</li>
            ))}
          </ul>
        </div>
        <CommentSection postId={post._id} />
      </div>
      <aside className='w-full lg:w-1/4 lg:sticky lg:top-10 space-y-10'>
        <div className='flex flex-col justify-center items-center mb-5'>
          <h1 className='text-xl mt-5'>Recent articles</h1>
          <div className='flex flex-wrap gap-5 mt-5 justify-center'>
            {recentPosts &&
              recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
          {recentPosts.length > 0 && (
            <Button onClick={handleLoadMore} color='light' className='mt-5'>
              Load More
            </Button>
          )}
        </div>
        {relatedPosts && relatedPosts.length > 0 && (
          <div className='flex flex-col justify-center items-center mb-5'>
            <h1 className='text-xl mt-5'>Related articles</h1>
            <div className='flex flex-wrap gap-5 mt-5 justify-center'>
              {relatedPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </aside>
    </main>
  );
};

export default PostPage;
