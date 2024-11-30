const db = require("../database/database");

const getAll = (req, res) => {
  const query = "SELECT * FROM program_studi ORDER BY ID ASC";
  db.query(query, [], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Gagal mengambil data program studi",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "Berhasil mengambil data program studi",
        program_studi: result,
      });
    }
  });
};

const getOne = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM program_studi WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Gagal mengambil data program studi",
        serverMessage: err,
      });
    } else if (result.length === 0) {
      res.status(404).json({
        message: "Program studi tidak ditemukan",
      });
    } else {
      res.status(200).json({
        message: "Berhasil mengambil data program studi",
        program_studi: result[0],
      });
    }
  });
};

const insert = (req, res) => {
  const { nama_prodi } = req.body;
  if (!nama_prodi) {
    return res.status(400).json({
      message: "Nama Prodi tidak boleh kosong",
    });
  }
  const query = "INSERT INTO program_studi (nama_prodi) VALUES (?)";
  db.query(query, [nama_prodi], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        res.status(400).json({
          message: "Nama Prodi harus unik",
        });
      } else {
        res.status(400).json({
          message: "Gagal menambahkan program studi",
          serverMessage: err,
        });
      }
    } else {
      res.status(201).json({
        message: "Berhasil menambahkan program studi",
        id: result.insertId,
        nama_prodi,
      });
    }
  });
};

const update = (req, res) => {
  const id = req.params.id;
  const { nama_prodi } = req.body;
  if (!nama_prodi) {
    return res.status(400).json({
      message: "Nama Prodi tidak boleh kosong",
    });
  }
  const query = "UPDATE program_studi SET nama_prodi = ? WHERE id = ?";
  db.query(query, [nama_prodi, id], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        res.status(400).json({
          message: "Nama Prodi harus unik",
        });
      } else {
        res.status(400).json({
          message: "Gagal memperbarui data program studi",
          serverMessage: err,
        });
      }
    } else if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Program studi tidak ditemukan",
      });
    } else {
      res.status(200).json({
        message: "Berhasil memperbarui data program studi",
        id,
        nama_prodi,
      });
    }
  });
};

// Mendefinisikan controller remove untuk menghapus program studi
const remove = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM program_studi WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Gagal menghapus data program studi",
        serverMessage: err,
      });
    } else if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Program studi tidak ditemukan",
      });
    } else {
      res.status(200).json({
        message: "Berhasil menghapus data program studi",
      });
    }
  });
};

// Ekspor semua controller
module.exports = {
  getAll,
  getOne,
  insert,
  update,
  remove,
};
