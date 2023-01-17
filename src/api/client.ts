import { create } from "apisauce";
import setting from "../config/setting";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLocalStorage from "../config/AppLocalStorage";


const headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
 
  const apiClient = create({
    baseURL: setting.apiUrl,
    headers: headers,
    timeout: 30000,
  });

   apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await AppLocalStorage.getToken();
    console.log("authToken", authToken);
    if (!authToken) return;


    request.headers['Authorization'] = `Bearer ${authToken}`;
  });


export default apiClient;
