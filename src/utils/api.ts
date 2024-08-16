import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsearch.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "8a32e46b88msh9339ecd95d77fd3p1cdfe3jsnd85336c480ca",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
});

export const fetchJobs = async (title: string) => {
  const response = await apiClient.get(`/search`, { params: { query: title } });
  return response.data.data;
};

export const fetchJobDetails = async (id: string) => {
  const response = await apiClient.get(
    `/job-details?job_id=${id}&extended_publisher_details=false`
  );
  return response.data.data[0];
};
