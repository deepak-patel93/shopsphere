const handleAsyncError = (myErrorFun) => (req, res, next) => {
  Promise.resolve(myErrorFun(req, res, next)).catch((err) => next(err));
};

export default handleAsyncError;