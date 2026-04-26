const handleAsyncError = (myErrorFun) => (req, res, next) => {
  Promise.resolve(myErrorFun(req, res, next)).catch((err) => {
    return next(err);
  });
};

export default handleAsyncError;