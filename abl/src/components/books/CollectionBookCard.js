import React, { useContext } from 'react';
import BookContext from '../../context/books/bookContext';

const BookCard = props => {
  const bookContext = useContext(BookContext);

  const { deleteBook } = bookContext;

  const { _id, title, author, averageRating, publishYear, photo } = props.book;

  const onSubmit = e => {
    e.preventDefault();
    deleteBook(_id);
  };

  return (
    <div className="max-w-sm max-h-80 bg-red-100 rounded overflow-hidden shadow-lg mx-auto my-4 flex">
      <img className="max-w-full max-h-full" src={photo} alt="Display" />
      <div className="flex-col">
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
          <button className="px-3 py-2 bg-blue-700 text-gray-700" onClick={onSubmit}>
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
