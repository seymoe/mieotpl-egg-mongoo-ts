import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, config } = app

  // 用户
  router.post(`${config.apiPrefix}/client/users/login`, controller.v1.user.login)
}
