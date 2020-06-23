import React, { useContext } from 'react';
import BookContext from '../../context/books/bookContext';

const BookCard = props => {
  const bookContext = useContext(BookContext);
  const { addBook } = bookContext;

  const book = {
    title: props.title,
    author: props.author,
    averageRating: props.rating,
    publishYear: props.year,
    photo: props.img,
  };

  const { author, averageRating, publishYear, photo } = book;

  let { title } = book;

  if (title.length > 20) {
    const titleArray = title.split(' ').slice(0, 5);
    title = titleArray.join(' ') + '...';
  }

  const onSubmit = e => {
    e.preventDefault();
    addBook(book);
  };

  const imgStyle = {
    width: '98px',
    height: '147px',
  };

  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 overflow-hidden">
      <div className="w-full h-full bg-white rounded overflow-hidden shadow-lg flex flex-row">
        <img style={imgStyle} className="" src={photo} alt="Display" />
        <div className="">
          <div className="px-2 py-1">
            <div className="font-bold text-red-500 text-xl mb-1">{title}</div>
            <p className="text-gray-700 text-base">by {author}</p>
          </div>
          <div className="px-2 py-1">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              <span role="img" aria-label="star">
                ⭐
              </span>
              {averageRating}
            </span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">&copy;{publishYear}</span>
            <button className="px-3 py-2 bg-blue-700 rounded text-white" onClick={onSubmit}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
