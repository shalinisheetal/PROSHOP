const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  // it passes this error to the next middleware which is errorHandler
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

// When we send a request to the Express server,
// it passes through the middleware chain until it finds a matching route which can serve it.
// If some URL matches, process terminates there.
// notFound middleware is triggered when no URL matches

// For all other errors errorHandler is directly called.
