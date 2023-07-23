import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Profile = () => {
  // Sample student data (you can replace this with your actual student data)
  const student = {
    name: "John Doe",
    photoUrl: "https://example.com/path/to/student-photo.jpg",
    age: 21,
    major: "Computer Science",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  const {user} = useContext(AuthContext)

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
       
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-10 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="student-profile">
            <img src={user?.photoURL} alt="Student" className="rounded-full p-5" />
            <h1 className="font-bold text-3xl pb-5">{user?.displayName}</h1>
            <hr />
            <div className="font-medium ">
              <p className="py-2">Email: {user?.email}</p>
              <p>Student UID: {user?.uid}</p>
            </div>
          </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
