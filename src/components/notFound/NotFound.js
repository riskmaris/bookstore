import './NotFound.css';
import fourOFfour from '../images/users/fourOFfour.png';

const NotFound = () => (
  <div className="category-secion not-found">
    <img src={fourOFfour} alt="404" />
    <span className="engineer-emoji"> 🕵️‍♂️ </span>
  </div>
);

export default NotFound;