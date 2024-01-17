import mongoose from "mongoose";

const studentInfoSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  beltLevel: {
    type: String
  }
});

const studentInfo = mongoose.model("studentInfo", studentInfoSchema);

export default studentInfo;
