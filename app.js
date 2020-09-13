const { yargs } = require("./yargs/yargs");
const locationApi = require("./LocationAPI/location");
const wheaterApi = require("./LocationAPI/wheater");

const direccion = yargs.direccion;
/* locationApi
  .obtenerData(direccion)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {});
wheaterApi
  .obtenerWheater("d", "23")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {}); */
const getInfo = async (dir = "") => {
  const direccion = await locationApi.obtenerData(dir);
  const wheater = await wheaterApi.obtenerWheater(
    direccion.latitud,
    direccion.longitud
  );
  console.log(
    `La direccion de ${direccion.direccion} tiene una temperatura de ${wheater}`
  );
};
getInfo(direccion);
