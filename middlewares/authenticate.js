const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = process.env;
const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401, "Invalid token"));
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = { authenticate };
