import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    require: true,
  },
  img: {
    type: Buffer,
    require: true,
  },
});

const Cars = mongoose.model("Cars", carSchema);

export default Cars;
