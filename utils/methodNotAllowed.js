//this is a function that takes in req and res and set the statuscode and returns a message to method not allowed
const methodNotAllowed = (req, res) => {
  console.log(req);
  res.status(400).json({
    message: `Method ${req.method} not Allowed on ${req.originalUrl}`,
  });
};

module.exports = methodNotAllowed;
