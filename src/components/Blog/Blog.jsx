import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs'

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    // console.log(blog);

    const {id, title, cover, author, author_img, posted_date, hashtags, reading_time } = blog;
    return (
        <div className='mb-20 border-b-4 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddBookmark(blog)} className='ml-2 text-2xl'><BsBookmark></BsBookmark></button>
                </div>
            </div>

            <h3 className="text-3xl mb-4">{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-blue-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;