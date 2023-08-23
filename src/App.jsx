// import Navigation from './components/navigation/navbar';
// import Navpage from './components/navigation/navpage';

// function App() {
//   return (
//     <>
//       <div className="navbar"><Navigation /></div>
//       <div className="container"><Navpage /></div>
//     </>
//   );
// }

// export default App;



import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navigation from './components/navigation/navbar';
import Navpage from './components/navigation/navpage';
import { getBookItems } from './components/redux/books/booksSlice';

function App() {
  const { isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <>
      <div className="navbar">
        <Navigation />
      </div>
      <div className="container">
        <Navpage />
      </div>
    </>
  );
}

export default App;