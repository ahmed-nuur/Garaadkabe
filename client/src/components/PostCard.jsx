/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 overflow-hidden rounded-lg sm:w-[430px] md:w-[300px] transition-all'>
      {/* Post Image */}
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] sm:h-[200px] md:h-[260px] transition-all duration-300 z-20'
        />
      </Link>

      {/* Post Details */}
      <div className="p-3 flex flex-col justify-between h-full">
        {/* Title and Category */}
        <div>
          <Link to={`/post/${post.slug}`} className='text-lg font-semibold line-clamp-2 hover:underline'>
            {post.title}
          </Link>
          <span className='block italic text-sm mt-1 text-gray-600'>{post.category}</span>
        </div>

        {/* Read Article Link */}
        <Link
          to={`/post/${post.slug}`}
          className='absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center py-2 rounded-b-lg m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}

export default PostCard;