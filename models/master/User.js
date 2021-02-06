const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    tenant: { type: String, required: true, trim: true, unique: true },
    storename: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", (next) => {
  this.tenant = this.storename;
});

module.exports = mongoose.model("User", UserSchema);
