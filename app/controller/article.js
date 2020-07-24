const moment = require('moment')
const Controller = require('egg').Controller;
class ArticleController extends Controller {
  async create() {
    const {ctx} = this;
    const params = {
      ...ctx.request.body,
      createTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }
    const result = await ctx.service.article.create(params)
    console.log(result)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布文章失败'
      }
    }
  }

  async lists() {
    const {ctx} = this;
    const result = await ctx.service.article.lists();
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: "查询错误"
      }
    }

  }

  async detail() {
    const {ctx} = this;
    const result = await ctx.service.article.detail(ctx.params.id)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询错误'
      }
    }
  }
}
module.exports = ArticleController;
