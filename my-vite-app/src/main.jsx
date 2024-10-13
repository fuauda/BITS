import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App.jsx';
import AddItem from './pages/addItem.jsx';
import Overview from './pages/overview.jsx';
import Credit from './pages/credit.jsx';
import Customer from './pages/customer.jsx';
import Rvenue from './pages/reven.jsx';
import Companys from './pages/companys.jsx';
import Purchases from './pages/purchase.jsx';
import Abouts from './pages/about.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'add-item', element: <AddItem /> },
      { path: 'overview', element: <Overview /> },
      { path: 'credit-customer', element: <Credit /> },
      { path: 'customer', element: <Customer /> },
      { path: 'revenue', element: <Rvenue /> },
      { path: 'company', element: <Companys /> },
      { path: 'purchase', element: <Purchases /> },
      { path: 'about', element: <Abouts /> },
      
      // 4
      // Define other child routes here
      { path: '*', element: <h1>Not Found</h1>  }, 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
