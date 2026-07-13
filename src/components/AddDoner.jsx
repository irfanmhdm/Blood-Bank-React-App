import axios from "axios";
import React, { useState } from "react";

const AddDoner = () => {
  const [input, changeInput] = useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: ""
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const readValue = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-donor", input)
      .then((response) => {
        console.log(response.data);
        alert("Donor added successfully");

        changeInput({
          donor_name: "",
          age: "",
          gender: "",
          blood_group: "",
          phone: "",
          email: "",
          city: "",
          weight_kg: "",
          last_donation_date: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add donor");
      });
  };

  return (
    <div className="container border border-2 rounded shadow p-5 mt-5">
      <h3 className="text-center mb-4">Blood Donor Registration</h3>

      <div className="row g-3">

        <div className="col-12 col-md-6">
          <label className="form-label">Donor Name</label>
          <input
            type="text"
            className="form-control"
            name="donor_name"
            value={input.donor_name}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={input.age}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={input.gender}
            onChange={inputHandler}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Blood Group</label>
          <select
            className="form-select"
            name="blood_group"
            value={input.blood_group}
            onChange={inputHandler}
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={input.phone}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={input.city}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            name="weight_kg"
            value={input.weight_kg}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Last Donation Date</label>
          <input
            type="date"
            className="form-control"
            name="last_donation_date"
            value={input.last_donation_date}
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 text-center mt-3">
          <button
            className="btn btn-success px-5"
            onClick={readValue}
          >
            Add Donor
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddDoner;