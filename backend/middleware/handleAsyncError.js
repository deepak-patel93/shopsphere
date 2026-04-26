const handleAsyncError = (fn) => {
  return function (req, res, next) {
    try {
      return Promise.resolve(fn(req, res, next)).catch((err) => {
        console.log("ERROR CAUGHT:", err);
        console.log("TYPE OF next:", typeof next);
        return next(err);
      });
    } catch (err) {
      console.log("SYNC ERROR:", err);
      console.log("TYPE OF next:", typeof next);
      return next(err);
    }
  };
};

export default handleAsyncError;