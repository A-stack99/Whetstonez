import axios from "axios";

export const AxiosPostRequest = async (data, retries = 3) => {
  try {
    const response = await axios.post('https://be.anaqa.sa/api/admin/login', data);
    return response;
  } catch (error) {
    if (retries > 0 && (error.response?.status === 503 || error.response?.status === 500)) {
      console.log(`Retrying request... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      return AxiosPostRequest(data, retries - 1); 
    }

    throw error;
};
}

const ServicePostRequest = async (data, retries = 3) => {
  try {
    const response = await axios.post('https://be.anaqa.sa/api/admin/services/addService', data, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    });
    return response; 
  } catch (error) {
    if (retries > 0 && (error.response?.status === 503 || error.response?.status === 500)) {
      console.log(`Retrying request... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      return ServicePostRequest(data, retries - 1); 
    }
    console.error("Error:", error); 
    throw error; 
  }
};

export const addService = async () => {
  const data = {
    salonId: 1,
    categoryId: 1,
    status: true,
    duration: 40,
    price: 1000,
    description: "Hair Cut",
    name: "Hair Cut"
  };

  try {
    const response = await ServicePostRequest(data);
    const responseData = response.data;
    console.log("Response:", responseData);
  } catch (error) {
    console.error("Error adding service:", error);
  }
};

