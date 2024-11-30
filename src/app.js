const express = require("express");
const app = express();
// import semua route mahasiswa dari file mahasiswa.js
const mahasiswa = require("./routes/mahasiswa");
const program = require("./routes/program");
// memdaftarkan path /mahasiswa sebagai endpoint untuk semua routes dari mahasiswa
app.use("/mahasiswa", mahasiswa);
app.use("/program", program);

module.exports = app;
