const Service = require('egg').Service
class ArticleService extends Service {
  async create(params) {
    const {app} = this;
    try {
      const res = await app.mysql.insert('article', params);
      return res;
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async lists() {
    const {ctx, app} = this;
    try {
      const result = await app.mysql.select("article")
      return result;
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async detail(id) {
    if (!id) {
      console.log("id 必须传递")
      return null
    }
    const {ctx, app} = this;
    try {
      const result = await app.mysql.get("article", {id})
      return result;
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

module.exports = ArticleService;
