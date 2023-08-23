const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");
/* GET_ALL employees */
router.get("/", employeeController.getAll);
/**Filter employee record */
/**Fetch employee details */
router.get("/:id", employeeController.get);

router.post("/company_name", employeeController.getcompanyemp);

router.get("/:id", employeeController.get);

/**Create employee record */
router.post("/", employeeController.create);

router.post("/:cname", employeeController.createce);
/**Update employee record */
router.put("/:id", employeeController.update);

router.delete("/:id", employeeController.delete);


module.exports = router;
