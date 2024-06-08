require("dotenv").config();

const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Jokes API is running on http://localhost:${port}`);
});