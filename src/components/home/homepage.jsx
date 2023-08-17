import './homepage.css';
import PropTypes from 'prop-types';

const Homepage = ({ booklist }) => (
  <>
    {booklist.map((book) => (
      <div key={book.id} className="book-list-container">
        <div className="book-info">
          <h2 className="book-category">{book.category}</h2>
          <h3 className="book-title">{book.title}</h3>
          <h6 className="book-author">{book.author}</h6>
          <div className="book-actions">
            <button className="book-action-button" type="submit">
              Comments
            </button>
            <div className="vertical-line" />
            <button className="book-action-button" type="submit">
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
              {book.progress}
              %
            </p>
            <p className="completed">{book.status}</p>
          </div>
          <div className="vertical-line progress-line" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">{book.current_chapter}</p>
            </div>
            <div>
              <button className="primary-button" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);
Homepage.propTypes = {
  booklist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      current_chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Homepage;
