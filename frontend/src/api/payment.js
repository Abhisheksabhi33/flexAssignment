import axios from "axios";

const makePayment = async (amount) => {
    const fee = amount.fee;
  try {
    const response = await axios.post("https://yoga-class-api-tfk2.onrender.com/v1/user/payment", {
      fee
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default makePayment;
