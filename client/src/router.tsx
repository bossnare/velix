import { createBrowserRouter } from 'react-router-dom';
import { Main } from './app/components/Main';
import { AppLayout } from './app/layouts/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Loading...</div>,
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);
