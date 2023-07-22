import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const MyCollege = () => {
  const [applied, setApplied] = useState([]);
  //   const myModalRef = useRef(null);
  //   const [selectedFeedback, setSelectedFeedback] = useState(true);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:4612/admissionApply");
      const data = await res.json();
      setApplied(data);
    };
    load();
  }, []);



  
 

  return (
    <>
      <div className="lg:overflow-hidden overflow-x-auto">
        <table className="table w-full mt-5 mx-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Serial</th>
              <th>College Name</th>
              <th>Candidate Name</th>
              <th>Subject</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applied.map((applied, index) => {
              const {
                CollegeName,
                candidateName,
                email,
                subject,
                photo,
                address,
                dateOfBirth,
                phoneNumber,
                _id,
              } = applied;
              return (
                <>
                 <Modal index={index} _id={_id} key={_id} phoneNumber={phoneNumber} subject={subject} photo={photo} address={address} dateOfBirth={dateOfBirth} CollegeName={CollegeName} candidateName={candidateName} email={email}></Modal>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCollege;
