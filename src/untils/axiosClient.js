import axios from "axios";

const axionClient = axios.create({
  baseURL: process.env.REACT_APP_DB_JSON,
});

export default axionClient;
