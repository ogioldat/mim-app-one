import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Library from './library/Library';
import { FirebaseContext, app as firebaseApp } from './firebase/FirebaseContext';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Library />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <FirebaseContext.Provider value={firebaseApp}>
        <RouterProvider router={router} />
      </FirebaseContext.Provider>
    </App>
  </React.StrictMode>
)
