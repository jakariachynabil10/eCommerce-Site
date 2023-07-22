import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AllColleges from "./AllColleges/AllColleges.jsx";
import SingleDetails from "./AllColleges/SingleDetails.jsx";
import Admission from "./Admission/Admission.jsx";
import SingleAdmission from "./Admission/SingleAdmission.jsx";
import MyCollege from "./MyCollege/MyCollege.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <App></App>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : "/allColleges",
        element : <AllColleges></AllColleges>
      },
      {
        path : "/college/:id",
        element : <SingleDetails></SingleDetails>,
        loader : ({params}) => fetch(`http://localhost:4612/allColleges/${params.id}`)
      },
      {
        path : "admission",
        element : <Admission></Admission>
      },
      {
        path : "/admissionCollege/:id",
        element : <SingleAdmission></SingleAdmission>,
        loader : ({params}) => fetch(`http://localhost:4612/allColleges/${params.id}`)
      },
      {
        path : "/myCollege",
        element : <MyCollege></MyCollege>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
