// package
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// route components
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CommonLayout from './layouts/CommonLayout';
import Feeds from './pages/Feeds';
const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      {
        path: '/',
        element:  <Feeds />,
    
      },
      {
        path: '/groups',
        element:  <Feeds />,

      },
 
    
      
    ],
  },

]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
