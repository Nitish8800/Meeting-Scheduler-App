const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: { type: "String", required: true },
    address: {
      street1: { type: "String", required: true },
      street2: { type: "String", required: true },
      country: { type: "String", required: true },
      state: { type: "String", required: true },
      pin: { type: "Number", required: true },
    },
    specialization: { type: "String" },
    fees: { type: "String" },
    createdDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("doctor", doctorSchema);
module.exports = Doctor;
