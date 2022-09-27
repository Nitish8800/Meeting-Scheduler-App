const mongoose = require("mongoose");
const Status = require("../constants/status");

const appointmentSchema = mongoose.Schema(
  {
    appointmentTime: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [Status.PENNDING, Status.SEEN, Status.REJECTED, Status.FINISHED],
      default: "pending",
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    createdDate: {
      type: Date,
    },
  },

  { timestamps: true }
);

const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;
