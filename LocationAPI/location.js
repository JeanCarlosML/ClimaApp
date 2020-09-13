const axios = require("axios");
const authCode = "129299956968337e15893806x41401";

const apInstance = (dir = "") => {
  let dirEncode = encodeURI(dir);
  const apiUrl = `https://geocode.xyz?locate=${dirEncode}&auth=${authCode}&json=1`;
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 3000,
  });
  return instance;
};

const obtenerData = async (dir = "") => {
  let instance = apInstance(dir);
  const resp = await instance.get();
  if (resp.data.error != null) {
    throw new Error(console.log(resp.data.error.description));
  }
  const direccion = dir;
  const latitud = resp.data.latt;
  const longitud = resp.data.longt;
  return { direccion: direccion, latitud: latitud, longitud: longitud };
};

module.exports = {
  obtenerData,
};
