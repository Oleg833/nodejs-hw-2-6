// // const boards = require("../models/boards.js");
// const { HttpError } = require("../helpers/HttpError.js");

// const { ctrlWrapper } = require("../helpers/ctrlWrapper.js");

// const { Board } = require("../models/board.js");

// const getAllBoards = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await Board.find({ owner }, "-createdAt -updatedAt ").populate(
//     "owner",
//     "name email"
//   );

//   res.json(result);
// };

// const getColumnById = async (req, res) => {
//   const { boardId } = req.params;
//   // const result = await Board.findOne({ _id: boardId });
//   const result = await Column.findById(boardId);
//   if (!result) {
//     throw HttpError(404, "ID not found");
//   }
//   res.json(result);
// };
// const getById = async (req, res) => {
//   const { boardId } = req.params;
//   // const result = await Board.findOne({ _id: boardId });
//   const result = await Board.findById(boardId);
//   if (!result) {
//     throw HttpError(404, "ID not found");
//   }
//   res.json(result);
// };

// const addBoard = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await Board.create({ ...req.body, owner });
//   res.status(201).json(result);
// };

// const updateById = async (req, res) => {
//   const { boardId } = req.params;
//   const result = await Board.findByIdAndUpdate(boardId, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(404, "Board not found");
//   }
//   res.status(201).json(result);
// };

// const updateFavorite = async (req, res) => {
//   const { boardId } = req.params;
//   const result = await Board.findByIdAndUpdate(boardId, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(400, "Missing field favorite");
//   }
//   res.status(200).json(result);
// };

// const deleteById = async (req, res) => {
//   const { boardId } = req.params;
//   const result = await Board.findByIdAndRemove(boardId);
//   if (!result) {
//     throw HttpError(404, "ID not found");
//   }
//   res.status(200).json(result);
// };

// module.exports = {
//   getAllBoards: ctrlWrapper(getAllBoards),
//   getById: ctrlWrapper(getById),
//   addBoard: ctrlWrapper(addBoard),
//   updateById: ctrlWrapper(updateById),
//   updateFavorite: ctrlWrapper(updateFavorite),
//   deleteById: ctrlWrapper(deleteById),
// };
