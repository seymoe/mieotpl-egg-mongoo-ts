import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_your_own_security_keys'

  // 获取真实IP
  config.proxy = true
  config.maxProxyCount = 1

  // add your egg config in here
  config.middleware = []

  // mongoose
  config.mongoose = {
    url: process.env.APP_MONGODB_URL || 'mongodb://127.0.0.1/your_dbname',
    options: {}
  }

  // add your special config in here
  const bizConfig = {
    // RESTFULL API PREFIX
    apiPrefix: '/api/v1'
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
