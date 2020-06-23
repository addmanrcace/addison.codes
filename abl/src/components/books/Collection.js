import React, { useContext, useEffect, Fragment } from 'react';
import CollectionBookCard from './CollectionBookCard';
import Spinner from '../layout/Spinner';
import BookContext from '../../context/books/bookContext';

const Collection = () => {
  const bookContext = useContext(BookContext);
  const { collection, getBooks, loading } = bookContext;
  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  if (collection !== null && collection.length === 0 && !loading) {
    return <div>You have an empty collection.</div>;
  }
  return (
    <Fragment>
      <h1 className="mt-4 font-extrabold text-xl">My Collection:</h1>
      <h2>{collection.length} Books</h2>
      <div className="flex flex-wrap w-full -mx-4">
        {collection.map(book => (
          <CollectionBookCard book={book} key={book._id} />
        ))}
      </div>
      {loading ? <Spinner /> : null}
    </Fragment>
  );
};

export default Collection;
