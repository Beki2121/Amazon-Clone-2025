import axios from 'axios';
import { version } from 'react';
const axiosInstance = axios.create({
  // local instance of firebase function
//  baseURL: "http://127.0.0.1:5001/clone-9c464/us-central1/api",

  // deployed version of firebase function
  // baseURL: "https://amazon-api-deploy-11w6.onrender.com",

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-11w6.onrender.com",
});

export  {axiosInstance};
