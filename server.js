require("dotenv").config();
const express = require("express");
const app = express();
const fileRouter = require('./Router/fileRouter')
const connectDB = require("./Config/dbConnect");
connectDB();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', fileRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
