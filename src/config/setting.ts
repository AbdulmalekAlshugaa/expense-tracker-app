const settings = {
  
    dev: {
      apiUrl: 'https://jsonplaceholder.typicode.com',
    },
    prod: {
      apiUrl: 'https://delivery-app-june.herokuapp.com/api/v1',
    },
    prod2: {
      apiUrl: 'http://34.67.216.151/api',
    },
  };
  
  const getCurrentSettings = () => {
    //   if (__DEV__) return settings.dev;
    //   if (Constants.manifest.releaseChannel === "staging") return settings.staging;
    return settings.prod2;
  };
  
  export default getCurrentSettings();