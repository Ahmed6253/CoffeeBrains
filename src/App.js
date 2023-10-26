import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Layout from './UI/Layout';
import ErrorPage from './UI/ErrorPage';
import CoffeeBeans from './pages/CoffeeBeans';
import Drinks from './pages/Drinks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CheckOut from './pages/CheckOut';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
        children: [
          {
            path: 'coffeeBeans',
            element: <CoffeeBeans />,
          },
          {
            path: 'drinks',
            element: <Drinks />,
          },
        ],
      },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkOut', element: <CheckOut /> },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
