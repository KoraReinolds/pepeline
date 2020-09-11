const api = require('./request');

export default async function (req, res, next) {
  try {
    res.end(JSON.stringify(await api.getVehicles()));
  } catch(err) {
    res.end(JSON.stringify(err));
  }
}