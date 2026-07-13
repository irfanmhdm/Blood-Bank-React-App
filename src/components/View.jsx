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
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Blood Donors</h2>

        <div className="row">
          {data.map((value) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-4 g-3"
                key={value.id}
              >
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h4 className="card-title text-center text-danger">
                      {value.donor_name}
                    </h4>

                    <hr />

                    <p className="card-text">
                      <strong>Age:</strong> {value.age}
                      <br />
                      <strong>Gender:</strong> {value.gender}
                      <br />
                      <strong>Blood Group:</strong> {value.blood_group}
                      <br />
                      <strong>Phone:</strong> {value.phone}
                      <br />
                      <strong>Email:</strong> {value.email}
                      <br />
                      <strong>City:</strong> {value.city}
                      <br />
                      <strong>Weight:</strong> {value.weight_kg} kg
                      <br />
                      <strong>Last Donation:</strong>{" "}
                      {value.last_donation_date}
                    </p>

                    <button className="btn btn-danger w-100">
                      {value.blood_group} Donor
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default View;