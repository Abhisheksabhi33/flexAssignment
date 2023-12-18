import database from "../database/config.js";

const userRegistration = async (req, res) => {
  try {
    const { name, age, email, phone, batch } = req.body;

    const [rows] = await database
      .promise()
      .query("SELECT * FROM Users WHERE email = ?", [email]);

    if (rows.length > 0) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    await database
      .promise()
      .query(
        "INSERT INTO Users (Name, Age, Email, Phone, Batch) VALUES (?, ?, ?, ?, ?)",
        [name, age, email, phone, batch]
      );

    const [rows2] = await database
      .promise()
      .query("SELECT * FROM Users WHERE email = ?", [email]);

    let sz = rows2.length;

    let obj = rows2[sz - 1];

    let id = obj.ID;

    await database
      .promise()
      .query("INSERT INTO Payment (UserID) VALUES (?)", [id]);

    res.status(200).json({
      message: "User enrolled successfully",
      user: {
        name,
        age,
        email,
        phone,
        batch,
      },
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const userPayment = async (req, res) => {
  const { fee } = req.body;

  if (fee >= 500) {
    const [rows] = await database
      .promise()
      .query("SELECT * FROM Users INNER JOIN Payment ON Users.ID = Payment.ID");

    // console.log(rows);

    let maxId = 0;
    let sz = rows.length;

    let obj = rows[sz - 1];
    maxId = obj.ID;

    await database
      .promise()
      .query(
        "UPDATE Payment SET LastPaymentDate = CURRENT_DATE, PaymentStatus = 'T' WHERE ID = ?",
        [maxId]
      );

    res.status(200).json({
      message: "Payment Successful",
      fee: fee,
    });
  } else {
    res.status(200).json({
      message: "Payment Unsuccessful",
      fee: fee,
    });
  }
};

const userBatchChange = async (req, res) => {
  try {
    const { desiredBatch } = req.body;

    const [rows] = await database.promise().query("SELECT * FROM Users");

    let sz = rows.length;

    let row = rows[sz - 1];

    let id = row.ID;
    let batch = row.Batch;
    let lastBatchChangeDate = row.LastBatchChangeDate;

    let date = new Date();
    let currentMonth = date.getMonth() + 1;

    let lastBatchChangeMonth = lastBatchChangeDate.getMonth() + 1;

    // console.log(currentMonth);
    // console.log(lastBatchChangeMonth);

    if (currentMonth != lastBatchChangeMonth) {
      await database
        .promise()
        .query(
          "UPDATE Users SET Batch = ?, LastBatchChangeDate = CURRENT_DATE WHERE ID = ?",
          [desiredBatch, id]
        );

      res.status(200).json({
        message: "Batch Changed Successfully",
        batch: desiredBatch,
      });
    } else {
      res.status(200).json({
        message: "You can change your batch only once in a month",
        batch: batch,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const getUserdetails = async (req, res) => {
  try {
    // fetch only user details
    const [rows2] = await database.promise().query("SELECT * FROM Users");

    let sz = rows2.length;

    let obj = rows2[sz - 1];

    let id = obj.ID;

    // now fetch the user details from payment table

    const [rows] = await database
      .promise()
      .query(
        "SELECT * FROM Users INNER JOIN Payment ON Users.ID = Payment.ID WHERE Users.ID = ?",
        [id]
      );

    let userDetails = rows[0];
     
    res.status(200).json({
      message: "User Details Fetched Successfully",
      userDetails: userDetails,
    });
  
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export { userRegistration, userPayment, userBatchChange, getUserdetails };
