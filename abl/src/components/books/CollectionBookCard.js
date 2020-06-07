import React from 'react';
// import BookContext from '../../context/books/bookContext';

const BookCard = props => {
  // const bookContext = useContext(BookContext);

  const book = {
    title: props.book.title,
    author: props.book.author,
    averageRating: props.book.averageRating,
    publishYear: props.book.publishYear,
    photo: props.book.photo,
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   addBook(book);
  // };
  return (
    <div className="max-w-sm max-h-80 bg-red-100 rounded overflow-hidden shadow-lg mx-auto my-4 flex">
      <img className="max-w-full max-h-full" src={book.photo} alt="Display" />
      <div className="flex-col">
        <div className="px-2 py-1">
          <div className="font-bold text-red-500 text-xl mb-1">{book.title}</div>
          <p className="text-gray-700 text-base">by {book.author}</p>
        </div>
        <div className="px-2 py-1">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <span role="img" aria-label="star">
              ⭐
            </span>
            {book.averageRating}
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">&copy;{book.publishYear}</span>
          {/* <button className="px-3 py-2 bg-blue-700 text-gray-700" onClick={onSubmit}>
            Add Book
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
