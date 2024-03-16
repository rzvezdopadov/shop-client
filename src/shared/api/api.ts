import axios from 'axios';
import { API_URL } from '../const/api';

export const $api = axios.create({
    baseURL: API_URL,
});
