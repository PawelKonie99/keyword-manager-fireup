import axios from "axios";
const allDataUri = "/data";

export const getAll = async () => {
  const request = await axios.get(allDataUri);
  return request.data;
};

export default { getAll };
