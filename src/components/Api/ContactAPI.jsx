import axios from "axios";

const API_URL = "https://portfolio-backend-nqnz.onrender.com/api/contact";

export const submitContactForm = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};
