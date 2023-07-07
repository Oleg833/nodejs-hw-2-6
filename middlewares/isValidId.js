const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const id = req.params.contactId;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: `${id} Invalid ID` });
  }
  next();
};

module.exports = {
  isValidId,
};
