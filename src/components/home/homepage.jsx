import React from 'react';
import './homepage.css';
import { useSelector } from 'react-redux';
import CartItems from './cartItems';

const Homepage = () => {
  const bookList = useSelector((state) => state.book.bookList);

  return (
    <div>
      {bookList.map((item) => (
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
