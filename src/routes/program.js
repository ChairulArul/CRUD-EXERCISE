const express = require("express");
const route = express.Router();
const programStudiController = require("../controllers/programStudi");

// Mendefinisikan endpoint
route.get("/", programStudiController.getAll);
route.get("/:id", programStudiController.getOne);
route.post("/", programStudiController.insert);
route.put("/:id", programStudiController.update);
route.delete("/:id", programStudiController.remove);

module.exports = route;
