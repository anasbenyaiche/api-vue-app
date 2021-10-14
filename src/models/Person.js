import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  emailAdress: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Person", personSchema);
