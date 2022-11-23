import axios from 'axios';
import {BASE_URL} from '../config/env.json';
import { getToken } from './tokenData';

const client = axios.create({
  baseURL: BASE_URL,
});


client.interceptors.request.use(async (config) => {
  try {
    const token =  await getToken();

    if (token && config ) {
      config!.headers!["Authorization"] = `Bearer ${token}`;
    }

    return await Promise.resolve(config);
  } catch (error) {
    return await Promise.resolve(config);
  }
});


export {client};
