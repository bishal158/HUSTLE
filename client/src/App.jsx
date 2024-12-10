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
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/hustle",
    element: <CommonLayout />,
    children: [
      {
        path: "/hustle",
        element: <Feeds />,
      },
      {
        path: "/hustle/forums",
        element: <Forums />,
      },
      {
        path: "/hustle/peoples",
        element: <Peoples />,
      },
      {
        path: "/hustle/groups",
        element: <Groups />,
      },
      {
        path: "/hustle/forum/:id",
        element: <SingleForum />,
      },
      {
        path: "/hustle/group/:id",
        element: <GroupView />,
      },
      {
        path: "/hustle/settings",
        element: <ProfileEdit />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
