const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company")


router.get("/", companyController.getAll);

router.post("/", companyController.create);
router.put("/:id", companyController.update);

router.get("/companyNames/", companyController.getcompany);

router.get("/:id", companyController.get);
router.delete("/:id", companyController.delete);

module.exports = router;