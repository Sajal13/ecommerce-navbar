import axios from 'axios';

export const getData = async (path: string) => {
  console.log(process.env.BASE_URL);
  const response = await axios.get(`${process.env.BASE_URL}/${path}`);
  console.log(process.env.BASE_URL);
  return response.data;
};
