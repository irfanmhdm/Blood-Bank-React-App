import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">View Donors</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Donor Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Weight (kg)</th>
              <th>Last Donation</th>
            </tr>
          </thead>

          <tbody>
            {data.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.id}</td>
                <td>{donor.donor_name}</td>
                <td>{donor.age}</td>
                <td>{donor.gender}</td>
                <td>{donor.blood_group}</td>
                <td>{donor.phone}</td>
                <td>{donor.email || "-"}</td>
                <td>{donor.city}</td>
                <td>{donor.weight_kg}</td>
                <td>{donor.last_donation_date || "-"}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default View;