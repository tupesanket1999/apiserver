const mcache = require("memory-cache");

const cacheUtil = (duration) => {
  return (req, res, next) => {
    const { refresh } = req.query;
    let key = "__express__" + req.originalUrl || req.url;
    if (refresh && refresh === "true") {
      mcache.del(key);
      console.info("Refetching");
    }
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      console.info("Sending from cache");
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      console.info("Saving into cache");
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
module.exports = {
  cacheUtil,
};
