import React, { useState } from "react";
import "./registration.css";
import registration from "../api/registration";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }

    if (age < 18 || age > 65) {
      alert("Age must be between 18 and 65");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must be valid");
      return;
    }

    if (phone.length < 10) {
      alert("Phone number must be at least 10 digits long");
      return;
    }

    const formData = { name, age, email, phone, batch };
    try {
      await registration.registerUser(formData);
      console.log("Registration successful!");
      setName("");
      setAge("");
      setEmail("");
      setPhone("");
      setBatch("");
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 3000);

      navigate("/payment");
    } catch (error) {
      console.error("Registration failed:", error.message);

      alert(error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="notification">
        Welcome! Please note: this site is hosted on a free server, so the
        initial response time may take 10 to 20 seconds. Thank you for your
        patience!
      </div>
      <div class="note-table">
        <h2>Welcome to our Yoga Classes</h2>
        <p>
          Enrolling for our monthly Yoga classes is easy and flexible. Remember,
          participants aged between 18-65 are eligible.
        </p>
        <p>
          <b>Enrollment and Fees:</b> You can enroll any day of the month, but
          the fee payment covers the entire month at 500/- Rs INR.
        </p>
        <p>
          <b>Batch Selection:</b> Choose your preferred time slot from 6-7AM,
          7-8AM, 8-9AM, or 5-6PM. You can switch between batches every month.
        </p>
        <p>
          <b>Payment Flexibility:</b> Payment can be made anytime during the
          month for the following month's classes. Ensure payment before the
          month begins.
        </p>
        <p>
          Enjoy your Yoga journey with us, and we're here to assist you along
          the way!
        </p>
      </div>
      <div className="registration-container">
        <h2>Yoga Class Registration</h2>
        {registrationSuccess && (
          <p className="success-notification">Registration successful!</p>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Batch:
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            >
              <option value="">Select Batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
