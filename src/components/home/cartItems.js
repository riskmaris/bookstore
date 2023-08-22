import React from 'react';
import PropTypes from 'prop-types';
import './homepage.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const CartItems = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-list-container">
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
            onClick={() => {
              dispatch(removeBook(itemId));
            }}
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
          <p className="percent-complete">70%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="vertical-line progress-line" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">
              Chapter 3: &quot;A Lesson Learned&quot;
            </p>
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

CartItems.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default CartItems;
