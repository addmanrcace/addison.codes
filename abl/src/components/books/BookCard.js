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

const BookCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      {/* <img className="w-full" src={require('../../assets/img/profile.jpg')} alt="Display" /> */}
      {/* <div className="px-6 py-4">
        <div className="font-bold text-red-500 text-xl mb-2">{books.title}</div>
        <p className="text-gray-700 text-base">{books.desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{books.author}</span>
      </div> */}
    </div>
  );
};

export default BookCard;