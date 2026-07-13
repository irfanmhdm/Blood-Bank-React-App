import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewCars = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

  }
  
  useEffect(
    ()=>{
        fetchData()
    },[]
  )
  return (
    <div>
      <div className="container mt-4">
        <div className="row">

          {data.map(
            (value, index) => {

              return (

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
                  <div className="card h-100">
                    <img
                      src={value.image}
                      className="card-img-top"
                      style={{ height: "300px", width : "350px", objectFit: "fill",padding:"10px" , marginLeft:"20px" }}
                      alt="Items"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title"><strong>{value.brand}</strong></h5>
                      <p className="card-text">
                       <strong> {value.model} <br />{value.fueltype}<br />{value.color}<br />{value.year}<br />
                        {value.price}</strong>
                      </p>
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              )
            }
          )}


        </div>
      </div>

    </div>

  )
}

export default View