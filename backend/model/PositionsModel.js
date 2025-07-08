// const { model } = require("mongoose");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

// const PositionsModel = new model("position", PositionsModel);

// module.exports = { PositionsModel };
const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("position", PositionsSchema); // ✅ Pass the schema here

module.exports = { PositionsModel };

