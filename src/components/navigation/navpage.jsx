import { Routes, Route } from 'react-router-dom';
import BookStorage from '../books';
import Caterories from '../categories/categories';
import NotFound from '../notFound/NotFound';

const Navpage = () => (
  <Routes>
    <Route index element={<BookStorage />} />
    <Route path="books" element={<BookStorage />} />
    <Route path="categories" element={<Caterories />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Navpage;
