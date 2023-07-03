const contacts = require("../models/contacts.js");
const { HttpError } = require("../helpers/HttpError.js");

const { ctrlWrapper } = require("../helpers/ctrlWrapper.js");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found id");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not contact found");
  }
  res.status(201).json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
