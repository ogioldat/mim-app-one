import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Library from './library/Library';
import { FirebaseContext } from './firebase/FirebaseContext';
import app from './firebase/app';
import App from './App';
import { ConfigContext } from './ConfigContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Library />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigContext>
      <App>
        <FirebaseContext.Provider value={app}>
          <RouterProvider router={router} />
        </FirebaseContext.Provider>
      </App>
    </ConfigContext>
  </React.StrictMode>
)
