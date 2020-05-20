import React from 'react';

const BookCard = (props) => {
  return (
    <div className="max-w-sm h-40 bg-red-100 rounded overflow-hidden shadow-lg mx-auto my-4 flex">
      <img className="max-w-full max-h-full" src={props.img} alt="Display" />
      <div className="flex-col">
        <div className="px-2 py-1">
          <div className="font-bold text-red-500 text-xl mb-1">{props.title}</div>
          <p className="text-gray-700 text-base">by {props.author}</p>
        </div>
        <div className="px-2 py-1">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <span role="img" aria-label="star">
              ⭐
            </span>
            {props.rating}
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">&copy;{props.year}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
