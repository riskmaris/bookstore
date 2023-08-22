/* eslint-disable react/prop-types */
import './homepage.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const CartItems = ({
  id,
  category,
  title,
  author,
  progress,
  status,
  currentChapter,
}) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="book-list-container">
      <div className="book-info">
        <h2 className="book-category">{category}</h2>
        <h3 className="book-title">{title}</h3>
        <h6 className="book-author">{author}</h6>
        <div className="book-actions">
          <button className="book-action-button" type="submit">
            Comments
          </button>
          <div className="vertical-line" />
          <button
            type="button"
            className="book-action-button"
            onClick={() => (dispatch(removeBook(id)))}
          >
            Remove
          </button>
          <div className="vertical-line" />
          <button className="book-action-button" type="submit">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-section">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">
            {progress}
            %
          </p>
          <p className="completed">{status}</p>
        </div>
        <div className="vertical-line progress-line" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">{currentChapter}</p>
          </div>
          <div>
            <button className="primary-button" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
