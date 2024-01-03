import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
} from "react-router-dom";
import { routes } from './router/route';
import { Provider } from 'react-redux';
import { store } from './_redux/store/store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={routes} />
     </Provider>
  </React.StrictMode>,
)
