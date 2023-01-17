import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const key = 'authToken';



const storeToken = async token => {
  try {
    await AsyncStorage.setItem(key, token);
  } catch (e) {
    console.error(e);
  }
};



// create a function that will save the token to async storage

// create a function that will get the token from async storage
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};
// create a function that will remove the token from async storage
const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error retrieving data
  }
};
const wipeAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // Error retrieving data
  }
};
// create a function that save user data



export default {
  storeToken,
  getToken,
  removeToken,
  
};
