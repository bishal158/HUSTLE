// package
import 'bootstrap/dist/css/bootstrap.min.css';

// route components
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CommonLayout from './layouts/CommonLayout';
import Feeds from './pages/Feeds';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Forums from './pages/Forums';
import ProfileEdit from './pages/ProfileEdit';
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
        path: '/forums',
        element:  <Forums />,

      },
      {
        path: '/settings',
        element: <ProfileEdit />  // add this if you want to use ProfilePage component
      }
    
      
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
