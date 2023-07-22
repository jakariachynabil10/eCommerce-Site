import React, { useEffect, useState } from 'react';
import SingleColleges from './SingleColleges';

const AllColleges = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 mt-10">
            {
                allColleges.map(singleCollege => <SingleColleges key={singleCollege._id} singleCollege={singleCollege}></SingleColleges>)
            }
        </div>
    );
};

export default AllColleges;