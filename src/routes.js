import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import Film from './pages/film';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/film/:id" component={Film} />
    </BrowserRouter>
  );
}
