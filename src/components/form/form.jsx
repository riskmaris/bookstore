import './form.css';

const Form = () => (
  <div className="form-container">
    <h2>ADD NEW BOOK</h2>
    <form className="submit-form">
      <input
        className="input input-book"
        type="text"
        placeholder="Book Title"
      />
      <select className="input category-input">
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

export default Form;
