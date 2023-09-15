import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 p-4">
            <h3 className='text-3xl text-center bg-slate-400 p-4 rounded-lg mb-4'>Reading Time: {readingTime}</h3>
            <h3 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;