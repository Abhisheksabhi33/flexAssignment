---

# Yoga Classes Web App (React.js, Node.js, express.js, MYSQL, CSS)

## Overview

This application is an admission form for monthly Yoga Classes. It allows individuals between the ages of 18 to 65 to enroll in monthly classes, pay fees on a monthly basis, and choose from four daily batches.

### Functionality

- **Registration**: The user must register for the yoga class according to the mentioned eligibility criteria.
- **Age Limit**: Users must be between 18-65 years old to enroll.
- **Monthly Payment**: Participants pay fees every month at any time.
- **Batch Selection**: Choose from four daily batches and switch between batches monthly.

### Database Design

- **Entities**: Users, Batches, Enrollments.
- **ER Diagram**:

![Screenshot 2023-12-18 192111](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/ce896920-c9b4-49f5-ba22-2570f5890002)

![Screenshot 2023-12-18 192422](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/62b13c77-887b-448c-acfa-234013094a7f)

## Implementation Details

### Frontend

- **Language/Framework**: Built using React.js.
- **User Interface**: Provides a form to collect user details and batch selection.
- **API Calls**: Utilizes REST API endpoints to send user data to the backend.

![Screenshot 2023-12-18 185753](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/9db39e4c-bb62-427e-bc0c-652f67319eb6)

![Screenshot 2023-12-18 185841](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/c996a8f7-ada4-4d8a-ab3c-f4da3e5d3434)

![Screenshot 2023-12-18 185855](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/9b04967a-1caf-4063-bcdc-9c90655df0a9)

![Screenshot 2023-12-18 185913](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/2ca712de-00a0-4406-8796-8e728599c6a6)

### Backend

- **Language/Framework**: Backend built using Node.js with Express.js.
- **API Endpoints**: Provides endpoints to handle user enrollment.
- **Database**: Stores user data, batch selections, and payment details. To check the MySQL database find the schema.sql file in the backend.

![Screenshot 2023-12-18 185641](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/5b5ad16e-9a1d-41b6-ae01-b028ad6d85fd)


### API Functionality

- **Validation**: Validates user data before storing it in the database.
- **Database Interaction**: Stores validated user data and batch selections.
- **Payment Handling**: Mock function `CompletePayment()` simulates payment processing.

  ### APIs and Endpoints
- - `/v1/user/registration`: POST endpoint to enroll users and handle batch selections.
  - Accepts user data, validates, stores in the database, and simulates payment processing.
  - Returns response based on payment result.
 
![Screenshot 2023-12-18 192639](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/ae834c6d-72e4-4c27-91e2-61e9d7fa62bb)

![Screenshot 2023-12-18 192658](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/92e2f442-6ce4-4406-a6c0-316e528a48c4)

![Screenshot 2023-12-18 192845](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/1f86bb9f-9e71-4fd7-95b6-98aa5e7d2a99)

![Screenshot 2023-12-18 192940](https://github.com/Abhisheksabhi33/flexAssignment/assets/87107030/0dd6e4a8-2a30-4654-a647-24f8e3e3bdab)


### How to Use

1. **Clone Repository**: `git clone https://github.com/your/repo.git`
2. **Install Dependencies**: `cd backend` and `npm install` (for both frontend and backend)
3. **Start Backend Server**: `npm start` (in `/backend`)
4. **Start Frontend**: `npm start` (in `/frontend`)
5. **Access App**: Visit `http://localhost:3000` in your browser.


### Additional Notes

- Modify the `CompletePayment()` function to integrate with the actual payment processing service.
- Ensure database configuration in `/backend/config/db.js` matches your MySQL setup.


---
