import React, { useEffect } from 'react';
import './homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './cartItems';
import { getBookItems } from '../../redux/books/booksSlice';

const Homepage = () => {
  const bookList = useSelector((state) => state.book.bookList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);
  const books = Object.entries(bookList).flatMap(
    ([key, value]) => value.map((item) => ({ ...item, item_id: key })),
  );
  return (
    <div>
      {books.map((item) => (
        <CartItems
          key={item.item_id}
          itemId={item.item_id}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Homepage;
