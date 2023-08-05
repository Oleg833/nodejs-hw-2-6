// const { Schema, model } = require("mongoose");
// const Joi = require("joi");

// const { handleMongooseError } = require("../helpers/handleMongooseError.js");

// // const iconList = ["starter", "pro", "business"];

// const boardSchema = new Schema(
//   {
//     boardTitle: {},
//     columnArray: [],
//     cardArray: [],
//     backgroundImg: {},
//     icon: {},
//     owner: {user_id},
//   },
//   { versionKey: false, timestamps: true }
// );
// const columnSchema = new Schema(
//   {
//     columnTitle: {},
//     boardId: {},
//     owner: {user_id},
//   },
//   { versionKey: false, timestamps: true }
// );

// const cardSchema = new Schema(
//   {
//     columnId:{},
//     cardTitle: {},
//     boardId: {},
//     descr: {},
//     priority: {},
//     deadline: {},
//     owner: {user_id},
//   },
//     { versionKey: false, timestamps: true }
// );

// const boardsSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Set name for board"],
//     },
//     email: {
//       type: String,
//       required: [true, "Set email for board"],
//     },
//     phone: {
//       type: String,
//       required: [true, "Set phone for board"],
//     },
//     favorite: {
//       type: Boolean,
//       default: false,
//     },
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: "user",
//       required: [true, "Set owner for board"],
//     },
//   },
//   { versionKey: false, timestamps: true }
// );

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ["com", "net"] },
//     })
//     .required(),
//   phone: Joi.string(),
//   // owner: Joi.string(),
//   favorite: Joi.boolean(),
// });

// const updateFavoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

// const schemas = { addSchema, updateFavoriteSchema };

// boardSchema.post("save", handleMongooseError);

// const Board = model("board", boardSchema);

// module.exports = { Board, schemas };
