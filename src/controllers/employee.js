const EmployeeService = require("../services/employee");
const employeeModel = require("../models/employee");
const CompanyService = require("../services/company");
const companyModel = require("../models/company");

const employeeService = new EmployeeService(employeeModel);
const companyService = new CompanyService(companyModel);

class EmployeeController {
  async getAll(req, res, next) {
    try {
      const result = await employeeService.getAll();
      res.status(200).json(result);
    } catch (ex) {
      next(ex);
    }
  }
  async getcompanyemp(req, res, next) {
    try {
      console.log("getttingthis ")

     console.log(req)
      const result = await employeeService.getcompanyemp(req.body.company_name);
      res.status(200).json(result);
    } catch (ex) {
      next(ex);
    }
  }

  async deletecompanyemp(req, res, next) {
    try {
      const result = await employeeService.getcompanyemp(req.body.company_name);
      res.status(200).json(result);
    } catch (ex) {
      next(ex);
    }
  }

  async get(req, res, next) {
    try {
      const result = await employeeService.get(req.params.id);
      res.status(200).json(result);
    } catch (ex) {

      next(ex);
    }
  }
  async create(req, res, next) {
    try {
      const result = await employeeService.create(req.body);
      res.status(201).json(result);
    } catch (ex) {
      next(ex);
    }
  }  //createce
  async createce(req, res, next) {
    try {
     

      const result = await employeeService.createce(req.params.cname,req.body);
      res.status(201).json(result);
    } catch (ex) {

      next(ex);
    }
  } 
  async update(req, res, next) {
    try {
      const result = await employeeService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (ex) {
      next(ex);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await employeeService.delete(req.params.id, req.body);
      res.status(200).json(result);
    } catch (ex) {
      next(ex);
    }
  }
 
}



module.exports = new EmployeeController(employeeService);
