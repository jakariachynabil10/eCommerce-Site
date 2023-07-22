import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:4612/allColleges");
      const data = await res.json();
      setAllColleges(data);
    };
    load();
  }, []);
  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table w-full mt-5">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>College Name</th>
              <th>Admission Last Date</th>
              <th>Admission Process</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allColleges.map((college, index) => {
              const {
                college_name,
                college_image,
                admission_date,
                research_history,
                rating,
                sports,
                admission_process,
                _id,
              } = college;
              return <>
              <tr>
              <th>{index + 1}</th>
              <td>{college_name}</td>
              <td>{admission_date}</td>
              <td>{admission_process.slice(0.5)}</td>
              <td><Link to={`/admissionCollege/${_id}`}>
              <button className="border px-7 py-2 rounded bg-image text-white transition-all duration-500 ease-linear hover:scale-105 transform-cpu">Admission</button>
              </Link></td>
              </tr>
              </>
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admission;
