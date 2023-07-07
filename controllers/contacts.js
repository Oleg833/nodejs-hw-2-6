// const contacts = require("../models/contacts.js");
const { HttpError } = require("../helpers/HttpError.js");

const { ctrlWrapper } = require("../helpers/ctrlWrapper.js");

const { Contact } = require("../models/contact.js");

const getAllContacts = async (req, res) => {
  //   const result = await contacts.listContacts();
  const result = await Contact.find({}, "-createdAt -updatedAt ");
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  // const result = await contacts.getContactById(contactId);
  // const result = await Contact.findOne({ _id: contactId });
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "ID not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  // const result = await contacts.updateContact(contactId, req.body);
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.status(201).json(result);
};
const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, "Missing field favorite");
  }
  res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "ID not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
};
