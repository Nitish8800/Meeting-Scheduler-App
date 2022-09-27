const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    userRelationship: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdDate: {
      type: Date,
    },
  },

  { timestamps: true }
);

const Patient = mongoose.model("patient", patientSchema);
module.exports = Patient;
