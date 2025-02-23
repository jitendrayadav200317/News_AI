import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  performance: [{ String }],
  bookmarks: [{ String }],
});

const User = mongoose.model("User", UserSchema);

export default User;


// model => controller => routes => app.js