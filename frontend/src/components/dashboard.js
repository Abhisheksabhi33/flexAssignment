import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

const formatDate = (date) => {
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${day}/${month}/${year}`;
};

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState([
    {
      ID: "",
      Name: "",
      Age: "",
      Email: "",
      Phone: "",
      Batch: "",
      userRegistrationDate: "",
      LastBatchChangeDate: "",
      UserID: "",
      LastPaymentDate: "",
      PaymentStatus: "",
    },
  ]);

  const [newBatch, setNewBatch] = useState("");

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Replace with your API endpoint
      const response = await axios.get(
        "https://yoga-class-api-tfk2.onrender.com/v1/user/getDetails"
      );

      let ans = response.data.userDetails;
      ans.userRegistrationDate = formatDate(ans.userRegistrationDate);
      ans.LastBatchChangeDate = formatDate(ans.LastBatchChangeDate);
      ans.LastPaymentDate = formatDate(ans.LastPaymentDate);
      setUserDetails(ans);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const handleBatchChange = async (userID) => {
    try {
      // Replace with your API endpoint for batch change
      const res = await axios.patch(
        "https://yoga-class-api-tfk2.onrender.com/v1/user/changeBatch"
      );
      console.log(`Batch changed for user ID: ${userID}`);
      fetchUserDetails();

      alert(res.data.message);
    } catch (error) {
      console.error("Error changing batch:", error.message);

      alert(error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>User Details Dashboard</h2>
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Batch</th>
            <th>User Registration Date</th>
            <th>Last Batch Change Date</th>
            <th>Last Payment Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr key={userDetails.ID}>
            <td>{userDetails.Name}</td>
            <td>{userDetails.Age}</td>
            <td>{userDetails.Email}</td>
            <td>{userDetails.Phone}</td>
            <td>{userDetails.Batch}</td>
            <td>{userDetails.userRegistrationDate}</td>
            <td>{userDetails.LastBatchChangeDate}</td>
            <td>{userDetails.LastPaymentDate}</td>
            <td>{userDetails.PaymentStatus === "T" ? "Paid" : "Not Paid"}</td>
          </tr>
        </tbody>
      </table>
      <div className="batch-change">
        <div key={userDetails.ID}>
          <p>User ID: {userDetails.UserID}</p>
          <p>
            Current Batch: {userDetails.Batch}
            <div style={{ marginBottom: "0px", marginTop: "10px" }}>
              Select New Batch:
            </div>
            <select
              value={newBatch}
              onChange={(e) => setNewBatch(e.target.value)}
            >
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
            <button onClick={() => handleBatchChange(userDetails.UserID)}>
              Change Batch
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
