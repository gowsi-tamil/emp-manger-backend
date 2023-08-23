const EmployeeService = require("../services/employee");
const employeeModel = require("../models/employee");
const CompanyService = require("../services/company");
const companyModel = require("../models/company");

const companyService = new CompanyService(companyModel);
const employeeService = new EmployeeService(employeeModel);

class CompanyController{
 
    async create(req, res, next) {
        try {
          const result = await companyService.create(req.body);
          res.status(201).json(result);
        } catch (ex) {
          next(ex);
        }
      }

      async get(req, res, next) {
        try {
          const result = await companyService.get(req.params.id);
          res.status(200).json(result);
        } catch (ex) {
          next(ex);
        }
      }

      async getAll(req, res, next) {
        try {
          const result = await companyService.getAll();
          res.status(200).json(result);
        } catch (ex) {
          next(ex);
        }
      }

      async update(req, res, next) {
        try {
          const result = await companyService.update(req.params.id, req.body);
          res.status(200).json(result);
        } catch (ex) {
          next(ex);
        }
      }

      async delete(req, res, next) {
        try {
          const company = await companyService.get(req.params.id);
          const emp = await employeeService.deletecompanyemp(company.company_name);
          const result = await companyService.delete(req.params.id, req.body);
          res.status(200).json(result);
        } catch (ex) {
          next(ex);
        }
      }
      //getcompany

      async getcompany(req, res, next) {
        try {
          const result = await companyService.getcompany();
          res.status(200).json(result);
        } catch (ex) {
          next(ex);
        }
      }
}

module.exports = new CompanyController(companyService);
