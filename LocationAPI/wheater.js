const axios = require("axios");
const authCode = "30d3d29740650e8fed3daf1c10b6fe37";

const apInstance = (lat = "", lon = "") => {
  if ( isNaN(lat) || isNaN(lon) ) {
    return 0;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${authCode}`;
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 3000,
  });
  return instance;
};

const obtenerWheater = async (lat = "", lon = "") => {
  let instance = apInstance(lat, lon);
  if (instance === 0) {
    throw new Error(console.log("Latitud o Longitud invalidas"));
  }
  const resp = await instance.get();
  return resp.data.main.temp;
};

module.exports = {
  obtenerWheater,
};
