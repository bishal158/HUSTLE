// package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

import 'yet-another-react-lightbox/styles.css'
import "yet-another-react-lightbox/plugins/counter.css";
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
import {SingleForum} from "./pages/SingleForum.jsx";
import Groups from './pages/Groups.jsx';
import GroupView from './pages/GroupView.jsx'
import Peoples from './pages/Peoples.jsx';
import Profile from './pages/Profile.jsx'
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
        path: '/peoples',
        element:  <Peoples />,

      },
      {
        path: '/groups',
        element:  <Groups />,

      },
      {
        path: '/forum/:id',
        element:  <SingleForum />,

      },
      {
        path: '/group/:id',
        element:  <GroupView />,

      },
      {
        path: '/settings',
        element: <ProfileEdit />  
      }
    
      
    ],
  },
  {
    path: 'profile',
    element: <Profile/>    
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
