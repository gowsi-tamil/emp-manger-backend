/** Base service class*/
class EmployeeService {
  constructor(model) {
    this.model = model;
  }
  /**Get all employees */
  async getAll() {
    try {
      const result = await this.model.find({});
      return result;
    } catch (ex) {
      throw ex;
    }
  }
  /** Get Employee details
   *
   * @param {number} id
   * @returns employee record
   */
  async get(id) {
    try {
      console.log(id)
      let query = { id };
      console.log("query")
      console.log(query)
      const result = await this.model.findOne(query);
      console.log(result)

      return result;
    } catch (ex) {
      throw ex;
    }
  }

  async getcompanyemp(cname) {
    try {
      console.log(cname)
     // let query = { cname };
      const result = await this.model.find({company_name:cname});
      return result;
    } catch (ex) {
      throw ex;
    }
  }

  async deletecompanyemp(cname) {
    try {

      const result = await this.model.deleteMany({company_name:cname});
      return result;
    } catch (ex) {
      throw ex;
    }
  }
  /** Get last employee unique id to auto increment while creating
   *
   * @returns id of last employee record
   */
  async getLastId() {
    try {
      return await this.model.count();
    } catch (ex) {
      throw ex;
    }
  }
  /** Create employee record
   *
   * @param {object} data
   * @returns created emplyee record
   */
  async create(data) {
    try {
      const id = await this.getLastId();
      data.id =Math.floor(Math.random() * 90000) + 10000;
      const saved = await this.model.create(data);
      return saved;
    } catch (ex) {
      throw ex;
    }
  }
  async createce(company,data) {
    try {
      const id = await this.getLastId();
      data.id = id + 1;

      data.company_name = company

      const saved = await this.model.create(data);

      return saved;
    } catch (ex) {
      throw ex;
    }
  }
  /**Update employee record by id
   *
   * @param {number} id
   * @param {object} data
   * @returns  updated employee record
   */
  async update(id, data) {
    try {
      const item = await this.model.findOneAndUpdate({ id }, data);
      return item;
    } catch (ex) {
      throw ex;
    }
  }

  async delete(id, data) {
    try {
      const item = await this.model.findOneAndDelete({ id }, data);
      return item;
    } catch (ex) {
      throw ex;
    }
  }

}

module.exports = EmployeeService;
