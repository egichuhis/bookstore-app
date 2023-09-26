import React from 'react';
import Header from './layout/Header';
import BooksList from './BooksList';
import AddBook from './AddBook';

const Home = () => (
  <div className="container">
    <Header />
    <BooksList />
    <AddBook />
  </div>
);

export default Home;
