require("dotenv").config();
const express = require("express");
const cors = require("cors");
const crudRoutes = require("./routes/crudRoutes");
const AuthRoute = require('./routes/Auth');
const Adm = require('./routes/Adm');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

const connectDb = () => {
  return mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Could not connect to database", err));
};
connectDb();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use("/crud", crudRoutes);
app.use("/api", AuthRoute);
app.use("/api", Adm);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
