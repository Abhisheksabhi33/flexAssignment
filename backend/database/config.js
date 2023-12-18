import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
});

connection.getConnection((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("DB Connected!");
});

export default connection;
