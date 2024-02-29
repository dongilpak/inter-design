import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterInfo } from './util/router.jsx';

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={RouterObject} />
    </React.StrictMode>
);
