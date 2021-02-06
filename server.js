require("dotenv").config();
const express = require("express");
const { addSignature } = require("./util/signature");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("its working");
});
app.use("/api/v1", require("./routers"));
// app.get('/', async (req, res) => {
//   const { t } = req.body;
//   const signbody = {
//     name: 'sikandar',
//     comment: 'hellow',
//   };
//   const d = await addSignature(signbody, t);
//   console.info(d);
//   res.json(d);

//   //   res.json(t);
// });

app.listen(3000, () => {
  console.log("runing");
});
