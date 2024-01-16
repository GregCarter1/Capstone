import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    validate: {
      validator: function(v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  phone: {
    type: String,
    required: true
    // unique: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
