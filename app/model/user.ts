import { Application } from 'egg'
import { Schema } from 'mongoose'

// 用户
export default (app: Application) => {
  const mongosee = app.mongoose

  const UserSchema = new mongosee.Schema({
    email: {type: Schema.Types.String, default: ''},
    phone: {type: Schema.Types.String, default: ''},
    nickname: {type: Schema.Types.String, default: ''},
    password: {type: Schema.Types.String, default: ''},
    // 真实姓名
    realname: {type: Schema.Types.String, default: ''},
    // 个性签名
    bio: {type: Schema.Types.String, default: ''},
    // 用户等级 0:0级用户 1:一级用户 2: 二级用户
    level: {type: Schema.Types.Number, default: 0},
    // 用户状态
    enable: {type: Schema.Types.Boolean, default: true},
    // 关注量
    following_count: {type: Schema.Types.Number, default: 0},
    // 粉丝量
    follower_count: {type: Schema.Types.Number, default: 0},
    // 积分
    score: {type: Schema.Types.Number, default: 0},
    // 邀请码
    invite_code: {type: Schema.Types.String},
    // 网址
    blog: {type: Schema.Types.String, default: ''},
    // 注册时间
    register_time: {type: Schema.Types.Date, default: Date.now},
    // 注册IP
    register_ip: {type: Schema.Types.String, default: ''},

    /* ----- 签到相关 ----- */
    // 签到次数
    // sign_count: {type: Schema.Types.Number, default: 0},
    // // 连续签到次数
    // keep_sign_count: {type: Schema.Types.Number, default: 0},
    // // 上次签到时间
    // last_sign_time: {type: Schema.Types.Date},

    // 扩展微信字段
    // openId: {type: Schema.Types.String, default: ''},
    // unionId: {type: Schema.Types.String, default: ''},
    // nickname: {type: Schema.Types.String, default: ''},
    // geoPosition: {type: Schema.Types.String, default: ''},
    // avatar: {type: Schema.Types.String, default: ''},
    // gender: {type: Schema.Types.Number, default: 0}, // 1 男 2 女 0 未知
    // city: {type: Schema.Types.String, default: ''},
    // province: {type: Schema.Types.String, default: ''},

    // 第三方登录 Github
    // provider: {type: Schema.Types.String, default: ''},
    // uid: {type: Schema.Types.String, default: ''},
    // githubUrl: {type: Schema.Types.String, default: ''}
  }, {
    timestamps: true
  })

  return mongosee.model('User', UserSchema)
}