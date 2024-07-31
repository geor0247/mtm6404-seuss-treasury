import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Books from './routes/Books';
import BookDetails from './routes/BookDetails';
import Quotes from './routes/Quotes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Books /> },
      { path: '/book/:id', element: <BookDetails /> },
      { path: '/quotes', element: <Quotes /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);