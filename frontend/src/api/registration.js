import axios from 'axios';

const registration = {
  registerUser: async (formData) => {
    try {
      const response = await axios.post('https://yoga-class-api-tfk2.onrender.com/v1/user/registration', formData);
      return response.data; // Return the response data if needed
    } catch (error) {
      throw new Error(error.response.data); // Throw an error if the API call fails
    }
  },
};

export default registration;
