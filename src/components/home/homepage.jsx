import './homepage.css';
import { useSelector } from 'react-redux';
import CartItems from './cartItems';
import Form from '../form/form';

const Homepage = () => {
  const { bookList } = useSelector((store) => store.book);
  console.log('bookList:', bookList);
  return (
    <>
      {bookList.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}
      <Form booklength={bookList.length} />
    </>
  );
};

export default Homepage;