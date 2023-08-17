import Navigation from './components/navigation/navbar';
import Navpage from './components/navigation/navpage';

function App() {
  return (
    <>
      <div className="navbar"><Navigation /></div>
      <div className="container"><Navpage /></div>
    </>
  );
}

export default App;
