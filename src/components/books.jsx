import { useState } from 'react';
import Homepage from './home/homepage';
import Form from './form/form';

const BookStorage = () => {
  const [bookList] = useState([
    {
      id: Math.random() * 1000,
      category: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      status: 'Completed',
      progress: '60',
      current_chapter: 'Chapter 17',
    },
    {
      id: Math.random() * 1000,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      status: 'Completed',
      progress: '8',
      current_chapter: 'Chapter 3: "A Lesson Learned"',
    },
  ]);
  return (
    <>
      <Homepage booklist={bookList} />
      <Form />
    </>
  );
};

export default BookStorage;
