import { create } from "apisauce";
import setting from "../config/setting";



const headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'X-Country-Code': 'MY',
    'X-Device-Id': '1234567890',
  }

  const apiClient = create({
    baseURL: setting.apiUrl,
    headers: headers,
    timeout: 30000,
  });

export default apiClient;
