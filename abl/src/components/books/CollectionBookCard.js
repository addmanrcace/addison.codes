import React, { useContext } from 'react';
import BookContext from '../../context/books/bookContext';

const BookCard = props => {
  const bookContext = useContext(BookContext);

  const { deleteBook, updateBook } = bookContext;

  const { _id, author, averageRating, publishYear, photo, status } = props.book;

  let { title } = props.book;

  const book = {
    _id,
    status,
  };

  if (title.length > 20) {
    const titleArray = title.split(' ').slice(0, 5);
    title = titleArray.join(' ') + '...';
  }

  const onSubmit = e => {
    e.preventDefault();
    deleteBook(_id);
  };

  const onChange = e => {
    e.preventDefault();
    let newStatus = e.target.options[e.target.selectedIndex].value;
    book.status = newStatus;
    console.log(book);
    updateBook(book);
  };

  const imgStyle = {
    width: '98px',
    height: '147px',
  };

  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3 p-4 overflow-hidden">
      <div className="w-full h-full bg-white rounded overflow-hidden shadow-lg flex flex-row">
        <img style={imgStyle} className="" src={photo} alt="Display" />
        <div className="">
          <div className="flex justify-between">
            <div className="px-2 py-1">
              <div className="font-bold text-red-500 text-xl mb-1">{title}</div>
              <p className="text-gray-700 text-base">by {author}</p>
            </div>
            <div className="px-2 py-1 flex flex-col">
              <span className="inline-block text-center mx-auto font-bold bg-green-400 rounded text-white px-2 py-1 whitespace-no-wrap">
                {status}
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 flex-grow-0">
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {averageRating}
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 flex-grow-0">
                &copy;{publishYear}
              </span>
            </div>
          </div>
          <div className="px-2 py-1">
            <button className="px-3 py-2 mx-2 my-2 bg-blue-700 rounded text-white" onClick={onSubmit}>
              Delete Book
            </button>
            {/* This works poorly, should come from response */}
            <div className="inline-block relative w-64">
              <select
                className="block mx-2 my-2 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={onChange}
              >
                <option value={null}>Change status</option>
                <option value="Want to read">Want to read</option>
                <option value="Reading">Reading</option>
                <option value="Dropped">Dropped</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
