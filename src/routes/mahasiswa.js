const express = require("express");
const route = express.Router();
const mahasiswaControllers = require("../controllers/mahasiswaControllers");

// Route untuk mengambil semua data mahasiswa
route.get("/", mahasiswaControllers.getAll);

// Route untuk mengambil satu mahasiswa berdasarkan ID
route.get("/:id", mahasiswaControllers.getOne);

// Route untuk mengambil mahasiswa berdasarkan kelas
route.get("/kelas/:kelas", mahasiswaControllers.getByKelas);

// Route untuk mengambil mahasiswa berdasarkan semester
route.get("/semester/:semester", mahasiswaControllers.getBySemester);

// Route untuk mengambil mahasiswa berdasarkan program studi
route.get(
  "/program-studi/:id_program_studi",
  mahasiswaControllers.getByProgramStudi
);

// Route untuk menambahkan mahasiswa
route.post("/", mahasiswaControllers.insert);

// Route untuk memperbarui mahasiswa berdasarkan ID
route.patch("/:id", mahasiswaControllers.update);

// Route untuk menghapus mahasiswa berdasarkan ID
route.delete("/:id", mahasiswaControllers.remove);

module.exports = route;
