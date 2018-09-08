import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu',
    component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/role/nodemenu',
    component: asyncComponent(() => import('container/security/node-menu/node-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role',
    component: asyncComponent(() => import('container/security/user/assign'))
  },
  //  系统参数
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  {
    path: '/system/node',
    component: asyncComponent(() => import('container/security/node/node'))
  },
  {
    path: '/system/node/addedit',
    component: asyncComponent(() => import('container/security/node-addedit/node-addedit'))
  },
  {
      path: '/system/node/setMateriallist',
      component: asyncComponent(() => import('container/security/node-setMateriallist/node-setMateriallist'))
  },
  {
    path: '/public/aboutus_addedit',
    component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
  },
  {
    path: '/public/hotLine_addedit',
    component: asyncComponent(() => import('container/public/hotLine-addedit/hotLine-addedit'))
  },
  {
    path: '/public/time_addedit',
    component: asyncComponent(() => import('container/public/time-addedit/time-addedit'))
  },
  {
    path: '/public/notice',
    component: asyncComponent(() => import('container/public/notice/notice'))
  },
  {
    path: '/public/notice/addedit',
    component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
  },
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  {
    path: '/general/textParam',
    component: asyncComponent(() => import('container/general/text-param/text-param'))
  },
  {
    path: '/general/textParam/addedit',
    component: asyncComponent(() => import('container/general/text-param-addedit/text-param-addedit'))
  },
  // 邀请好友
  {
    path: '/material/myHref',
    component: asyncComponent(() => import('container/inviteFriends/material/myHref'))
  },
  // 直推好友
  {
    path: '/myFriend/directRecommend',
    component: asyncComponent(() => import('container/inviteFriends/myFriend/directRecommend'))
  },
  // 间推好友
  {
    path: '/myFriend/inDirectRecommend',
    component: asyncComponent(() => import('container/inviteFriends/myFriend/inDirectRecommend'))
  },
  // 佣金明细
  {
    path: '/myFriend/direct/edit',
    component: asyncComponent(() => import('container/inviteFriends/myFriend/directRecommend-addedit'))
  },
  // 账户查询 -- 账户查询
  {
    path: '/account/account',
    component: asyncComponent(() => import('container/bonusManagement/account/account'))
  },
  // 提币
  {
    path: '/account/mentionMoney',
    component: asyncComponent(() => import('container/bonusManagement/account/mentionMoney/mentionMoney'))
  },
  // 资金流水
  {
    path: '/account/moneyWater',
    component: asyncComponent(() => import('container/bonusManagement/account/ledger'))
  },
  // 账户查询 -- 流水查询
  {
    path: '/account/ledger',
    component: asyncComponent(() => import('container/bonusManagement/account/ledger'))
  },
  // 流水查询 -- 详情
  {
    path: '/account/ledger/addedit',
    component: asyncComponent(() => import('container/bonusManagement/account/ledger-addedit'))
  },
  // 提成管理 -- 提成概况
  {
    path: '/bonus/generalSituation',
    component: asyncComponent(() => import('container/bonusManagement/bonus/generalSituation/generalSituation'))
  },
  // 提成管理 -- 未结算提成
  {
    path: '/bonus/anOpenAccountQuery',
    component: asyncComponent(() => import('container/bonusManagement/bonus/anOpenAccountQuery/anOpenAccountQuery'))
  },
  // 未结算提成 -- 详情
  {
    path: '/bonus/Query/addedit',
    component: asyncComponent(() => import('container/bonusManagement/bonus/anOpenAccountQuery/anOpenAccountQuery-addedit'))
  },
  // 提成管理 -- 已结算提成
  {
    path: '/bonus/settledAccounts',
    component: asyncComponent(() => import('container/bonusManagement/bonus/settledAccounts/settledAccounts'))
  },
  // 已结算提成 -- 详情
  {
    path: '/bonus/Accounts/addedit',
    component: asyncComponent(() => import('container/bonusManagement/bonus/settledAccounts/settledAccounts-addedit'))
  },
  // 提成管理 -- 已提现提成
  {
    path: '/bonus/alreadyPresented',
    component: asyncComponent(() => import('container/bonusManagement/bonus/alreadyPresented/alreadyPresented'))
  },
  // 已提现提成 -- 详情
  {
    path: '/bonus/Presented/addedit',
    component: asyncComponent(() => import('container/bonusManagement/bonus/alreadyPresented/alreadyPresented-addedit'))
  },
  // 未结算查询
  {
    path: '/bonus/noSettlement',
    component: asyncComponent(() => import('container/bonusManagement/bonus/anOpenAccountQuery/anOpenAccountQuery'))
  },
  // 已结算查询
  {
    path: '/bonus/hasSettled',
    component: asyncComponent(() => import('container/bonusManagement/bonus/settledAccounts/settledAccounts'))
  },
  // 个人中心 -- 支付密码
  {
    path: '/user/payPwd',
    component: asyncComponent(() => import('container/bonusManagement/user/payPwd'))
  },
  // 个人中心 -- 登陆密码
  {
    path: '/user/loginPwd',
    component: asyncComponent(() => import('container/bonusManagement/user/loginPwd'))
  },
  // 个人中心 -- 常用地址
  {
    path: '/user/oftenUseAddress',
    component: asyncComponent(() => import('container/bonusManagement/user/oftenUseAddress'))
  },
  {
    path: '/user/oftenUseAddress/addedit',
    component: asyncComponent(() => import('container/bonusManagement/user/oftenUseAddress-addedit'))
  }
];

export default ROUTES;
