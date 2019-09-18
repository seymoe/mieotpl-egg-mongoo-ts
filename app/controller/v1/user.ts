import { Controller } from 'egg'
// import { ObjectId } from 'bson'

export default class UserController extends Controller {
  /**
   * 用户登录
   */
  public async login() {
    // const { ctx, service } = this
    // const body = ctx.request.body
    // const validate = ctx.helper.valiUserLogin(body)
    // if (validate.status) {
    //   // 1. 根据用户名查出用户
    //   // 2. 检查用户的密码匹配情况
    //   // 3. 成功则返回token
    //   let user = await service.user.findByCondition({
    //     email: body.email
    //   })
    //   if (user && user._id) {
    //     let hashResult = await compare(body.password, user.password)
    //     if (hashResult) {
    //       const token = await service.user.createToken({id: user._id})
    //       return ctx.helper.renderApiData(ctx, {
    //         user,
    //         token
    //       }, 200, '登录成功')
    //     } else {
    //       return ctx.helper.renderApiErr(ctx, 400, `账号或密码错误`)
    //     }
    //   } else {
    //     return ctx.helper.renderApiErr(ctx, 400, `账号或密码错误`)
    //   }
    // } else {
    //   return ctx.helper.renderApiErr(ctx, 400, validate.msg)
    // }
  }
}