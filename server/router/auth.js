const express = require("express");

const router = express.Router();
const User = require("../module/userSchema");
require("../db/conn");

// router.get("/", (req, res) => {
//   res.send(`welcome to home page amit`);
// });

// promice

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "creadintial is not fill" });
//   }

//   User.findOne({ email: email }).then((userExist)=>{
//   if (userExist) {
//     return res.status(422).json({ error: "user alerady exist" });
//   }

//   const user = new User({
//     name,
//     email,
//     phone,
//     work,
//     password,
//     cpassword,
//   });
//   user
//     .save()
//     .then(() => {
//       res.status(201).json({ message: "User successfully register" });
//     })
//     .catch((err) => res.status(500).json({ error: "Failed to register" }));
//   // res.json({message:req.body});
// }).catch(err=>{console.log(err)})
// });

// async
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "creadintial is not fill" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "user alerady exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

   await user.save();

    res.status(201).json({ message: "User successfully register" });
  
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
