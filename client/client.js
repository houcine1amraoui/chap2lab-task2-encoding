import axios from "axios";

const login = async () => {
  const username = "mohamed-msila";
  const password = "mohamed2024";
  const encodedPassword = Buffer.from(password).toString("base64");
  const options = {
    method: "POST",
    url: "http://localhost:2000/login",
    data: {
      username,
      encodedPassword,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
};

login();
console.log("End.");
