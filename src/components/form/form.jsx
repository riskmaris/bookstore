import './form.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    item_id: Date.now(),
    title: '',
    author: '',
    category: '',
  });
  const clearField = () => {
    setBook({
      item_id: Date.now(),
      title: '',
      author: '',
      category: '',
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(addBook(book));
      clearField();
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>ADD A NEW BOOK</h2>
      <form className="submit-form" onSubmit={addNewBook}>
        <input
          required
          name="title"
          className="input input-book"
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          required
          name="author"
          className="input input-book"
          type="text"
          placeholder="Book author"
          value={book.author}
          onChange={handleChange}
        />
        <select
          name="category"
          value={book.category}
          className="input category-input"
          onChange={handleChange}
          required
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="book-submit-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
