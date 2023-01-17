import client from "./client";

const endpoint = "/authenticate";
const uploadEndpoint = "/upload";
const scanEndpoint = "/locations/1/qr/scan";

const authenticateUser = (userLogin: any) =>
  client.post(`${endpoint}`, userLogin);

const postLocationIdAndUserId = (locationId: any, userId: any) =>
  client.post(`${uploadEndpoint}`, locationId, userId);

  const scanQrCode = (userId:any) =>
  client.post(`/locations/1/qr/scan?userId=${userId}`);

export default {
  authenticateUser,
  postLocationIdAndUserId,
  scanQrCode,
};
