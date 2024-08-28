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
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
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
  {
    path: '/signup',
    element: <SignUp/>    
  },
  {
    path: '/signin',
    element: <SignIn/>    
  },


]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
