import client from "./client";

const endpoint = "/expenses";

const getExpenses = () => client.get(endpoint);

const addPost = (orderData: any) =>
  client.put(`${endpoint}`, 
    orderData,
  );

 

export default {
    getExpenses,
    addPost
};

