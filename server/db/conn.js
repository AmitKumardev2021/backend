const mongoo = require("mongoose");

const DB = process.env.DATABASE;

mongoo
  .connect(DB)
  .then(() => {
    console.log("successfull connected");
  })
  .catch((err) => console.log("not connected"));
