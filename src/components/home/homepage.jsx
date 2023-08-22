import React from 'react';
import './homepage.css';
import { useSelector } from 'react-redux';
import CartItems from './cartItems';
import Form from '../form/form';

const Homepage = () => {
  const { bookList } = useSelector((store) => store.book);

  return (
    <div>
      {bookList.map((item) => (
        <CartItems
          key={item.item_id}
          item_id={item.item_id}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
      <Form booklength={bookList.length} />
    </div>
  );
};

export default Homepage;
