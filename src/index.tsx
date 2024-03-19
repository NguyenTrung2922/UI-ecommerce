import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import LoginPage from './pages/Admin/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserLayout from './layouts/UserLayout/UserLayout';
import HomePage from './pages/Web/HomePage/HomePage';
import ProductPage from './pages/Web/ProductPage/ProductPage';
import ListProducts from './pages/Web/ListProducts/ListProducts';
import ListShops from './pages/Web/ListShops/ListShops';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "product",
        element: <ProductPage />,
        children: [
          {
            path: '',
            element: <ListProducts />
          },
          {
            path: 'list-shops',
            element: <ListShops />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
