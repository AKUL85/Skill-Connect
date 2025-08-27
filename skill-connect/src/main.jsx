import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthProvider from './Auth/AuthProvider';
import BrowseTeachers from './pages/BrowseTeachers';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CommunityFeed from './pages/CommunityFeed';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:"/login",
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },{
        path:"/browse",
        element:<BrowseTeachers></BrowseTeachers>
      },{
        path:'/courses',
        element:<Courses></Courses>
      },{
        path:'course/:id',
        element:<CourseDetails></CourseDetails>
      },{
        path:'/community',
        element:<CommunityFeed></CommunityFeed>
      },{
        path:'/student/dashboard',
        element:<StudentDashboard></StudentDashboard>
      },{
        path:'/teacher/dashboard',
        element:<TeacherDashboard></TeacherDashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
