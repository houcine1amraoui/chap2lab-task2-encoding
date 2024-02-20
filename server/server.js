import express from "express";
import bcrypt from "bcrypt";
import { users } from "./users.js";

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const { username, encodedPassword } = req.body;
  const decodedPassword = Buffer.from(encodedPassword, "base64").toString(
    "utf-8"
  );

  const result = users.filter((user) => {
    return user.username === username;
  });
  var match = false;
  if (result) {
    console.log(result[0]);
    match = await bcrypt.compare(decodedPassword, result[0].hashedPassword);
  }
  return res.send(match);
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
