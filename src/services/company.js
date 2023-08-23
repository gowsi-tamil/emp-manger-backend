class CompanyService {
    constructor(model2) {
      this.model2 = model2;
    }

    async create(data) {
        try {
          console.log("data")
          console.log(data)

          const id = await this.getLastId();
          console.log(id)
        //  data.id = id + 1;
          data.id=  Math.floor(Math.random() * 90000) + 10000;
          const saved = await this.model2.create(data);
          return saved;
        } catch (ex) {

          throw ex;
        }
      }
      async get(id) {
        try {
          let query = { id };
          const result = await this.model2.findOne(query);
          return result;
        } catch (ex) {
          throw ex;
        }
      }

      async getLastId() {
        try {
          return await this.model2.count();
        } catch (ex) {
          throw ex;
        }
      }

      async getAll() {
        try {
          const result = await this.model2.find({});
          return result;
        } catch (ex) {
          throw ex;
        }
      }
      //getcompany
      async getcompany() {
        try {

          const companies = await this.model2.find({}, { company_name: 1 });
          const companyNames = companies.map(company => company.company_name);
          console.log(companyNames)
          return companyNames;
        } catch (error) {
          throw error;
        }
      }
      async update(id, data) {
        try {
          const item = await this.model2.findOneAndUpdate({ id }, data);
          return item;
        } catch (ex) {
          throw ex;
        }
      }

      async delete(id, data) {
        try {
          const item = await this.model2.findOneAndDelete({ id }, data);
          return item;
        } catch (ex) {
          throw ex;
        }
      }
}
module.exports = CompanyService;
