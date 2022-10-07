import client from "./client";

const endpoint = "/expenses";

const getExpenses = () => client.get(endpoint);


export default {
    getExpenses,
};

