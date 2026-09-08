import axios from "axios";

const API_URL = "http://localhost:8081/api/contact";

export const submitContactForm = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};
