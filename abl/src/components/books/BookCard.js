import React from 'react';

// const books = fetch('../../dummies/books.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(books);

const BookCard = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4 flex">
      <img className="w-full" src={props.img} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-red-500 text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.author}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{props.rating}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{props.year}</span>
      </div>
    </div>
  );
};

export default BookCard;
