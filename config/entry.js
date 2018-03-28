const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  index: {
    entry: './src/page/main.js',
    title: 'info',
    filename: 'index.html',
    template: 'sentry/index_touch.html'
  },
  login: {
    entry: './src/page/user/login/main.js',
    title: '登录',
    filename: 'login.html',
    template: 'sentry/index_touch.html'
  },
  safeGuard: { // 改版
    entry: './src/page/company/safeGuard/main.js',
    title: '安全保障',
    filename: 'safeGuard.html',
    template: 'sentry/index_touch.html'
  },
  platInfo: { // 改版
    entry: './src/page/company/platInfo/main.js',
    title: '数据披露',
    filename: 'platInfo.html',
    template: 'sentry/platInfo.html'
  },
  jxbSX: {
    entry: './src/page/company/jxbSX/main.js',
    title: '银行存管上线了',
    filename: 'jxbSX.html',
    template: 'sentry/index_750.html'
  },
  platNotice: {
    entry: './src/page/company/platNotice/main.js',
    title: '平台公告',
    filename: 'platNotice.html',
    template: 'sentry/index_touch.html'
  },
  act_invite_4: { // 增加浏览器内的分享页面
    entry: './src/page/act/act_invite_4/main.js',
    title: '邀好友升级啦，跟好友一起“金”喜成长',
    filename: 'act_invite_4.html',
    template: 'sentry/index_750.html'
  },
  proDetail: {
    entry: './src/page/pro/proDetail/main.js',
    title: '定期详情',
    filename: 'proDetail.html',
    template: 'sentry/index_touch.html'
  },
  proXMsg: {  // 去掉了在浏览器内立即转入的展示
    entry: './src/page/proX/proXMsg/main.js',
    title: '老虎活期介绍',
    filename: 'proXMsg.html',
    template: 'sentry/index_touch.html'
  },
  proXRecord: { // 去掉了在浏览器内立即转入的展示
    entry: './src/page/proX/proXRecord/main.js',
    title: '活期转入列表',
    filename: 'proXRecord.html',
    template: 'sentry/index_touch.html'
  },
  proGroup: {
    entry: './src/page/proX/proGroup/main.js',
    title: '标的组成',
    filename: 'proGroup.html',
    template: 'sentry/index_touch.html'
  },
  riskAssess: {
    entry: './src/page/user/riskAssess/main.js',
    title: '风险评估',
    filename: 'riskAssess.html',
    template: 'sentry/index_touch.html'
  },
  signIn: {
    entry: './src/page/user/signIn/main.js',
    title: '每日签到',
    filename: 'signIn.html',
    template: 'sentry/index_touch.html'
  },
  vip: {
    entry: './src/page/user/vip/main.js',
    title: '会员中心',
    filename: 'vipInfo.html',
    template: 'sentry/index_1080.html'
  },
  comProblem: {
    entry: './src/page/company/problem/main.js',
    title: '常见问题',
    filename: 'problem.html',
    template: 'sentry/index_touch.html'
  },
  cjProblem: {
    entry: './src/page/company/problem/cjProblem/main.js',
    title: '出借问题',
    filename: 'cjProblem.html',
    template: 'sentry/index_touch.html'
  },
  czProblem: {
    entry: './src/page/company/problem/czProblem/main.js',
    title: '充值问题',
    filename: 'czProblem.html',
    template: 'sentry/index_touch.html'
  },
  txProblem: {
    entry: './src/page/company/problem/txProblem/main.js',
    title: '提现问题',
    filename: 'txProblem.html',
    template: 'sentry/index_touch.html'
  },
  zhProblem: {
    entry: './src/page/company/problem/zhProblem/main.js',
    title: '账号问题',
    filename: 'zhProblem.html',
    template: 'sentry/index_touch.html'
  },
  yhqProblem: {
    entry: './src/page/company/problem/yhqProblem/main.js',
    title: '优惠券问题',
    filename: 'yhqProblem.html',
    template: 'sentry/index_touch.html'
  },
  yhTransfer: {
    entry: './src/page/user/invest/recharge/yhTransfer/main.js',
    title: '银行转账',
    filename: 'yhTransfer.html',
    template: 'sentry/index_touch.html'
  },
  zfbTransfer: {
    entry: './src/page/user/invest/recharge/zfbTransfer/main.js',
    title: '支付宝转账',
    filename: 'zfbTransfer.html',
    template: 'sentry/index_touch.html'
  },
  rechargeDesc: {
    entry: './src/page/user/invest/recharge/rechargeDesc/main.js',
    title: '充值说明',
    filename: 'rechargeDesc.html',
    template: 'sentry/index_touch.html'
  },
  coupon: {
    entry: './src/page/user/coupon//main.js',
    title: '优惠券',
    filename: 'coupon.html',
    template: 'sentry/index_touch.html'
  },
  inviteFriend: {
    entry: './src/page/user/inviteFriend/main.js',
    title: '邀请好友',
    filename: 'inviteFriend.html',
    template: 'sentry/index_touch.html'
  },
  turnBrand: {
    entry: './src/page/actX/turnBrand/main.js',
    title: '翻翻乐',
    filename: 'turnBrand.html',
    template: 'sentry/index_1080.html'
  }/*
  ,
  contract: {
    entry: './src/page/pro/contract/main.js',
    title: '协议',
    filename: 'contract.html',
    template: 'sentry/index_touch.html'
  }*/
};

/*
 * config = {
  index: config.index,
  login: config.login,
  inviteFriend: config.inviteFriend
}
 * */

const ext = {
  dev: {
    inject: true
    // 增加模块名的注入
  },
  prod: {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // 增加模块名的注入
    inject: true,
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
    chunks: ['manifest', 'vendor']
  }
};

exports.getEntrys = function () {
  let entrys = {};
  for (let item in config) {
    entrys[item] = config[item].entry;
  }
  return entrys;
};

exports.getDevHtml = function () {
  let devHtml = [];
  let i = 0;
  for (let item in config) {
    delete config[item].entry;
    devHtml[i] = new HtmlWebpackPlugin(merge(config[item], ext.dev, {chunks: [item]}));
    i++;
  }
  return devHtml;
};

exports.getProdHtml = function () {
  let prodHtml = [];
  let i = 0;
  for (let item in config) {
    delete config[item].entry;
    prodHtml[i] = new HtmlWebpackPlugin(merge(config[item], ext.prod, {chunks: [item]}));
    i++;
  }
  return prodHtml;
};
