import mongoose from "mongoose";

const trainingLogSchema = new mongoose.Schema({
  training: {
    type: Date
  },
  kata: {
    type: String
  },
  katapractice: {
    type: Number
  },
  distance: {
    type: Number
  },
  pace: {
    type: Number
  },
  time: {
    type: Number
  },
  pushups: {
    type: Number
  },
  crunches: {
    type: Number
  },
  burpies: {
    type: Number
  },
  wallsit: {
    type: Number
  }
});

const trainingLog = mongoose.model("trainingLog", trainingLogSchema);

export default trainingLog;
