import { combineReducers } from 'redux';
import { user } from './redux/user';
import { menu } from './redux/menu';
import { modalDetail } from './redux/modal/build-modal-detail';
import { securityRole } from './redux/security/role';
import { securityRoleAddEdit } from './redux/security/role-addedit';
import { securityMenu } from './redux/security/menu';
import { securityMenuAddEdit } from './redux/security/menu-addedit';
import { securitySysParam } from './redux/security/sysParam';
import { securitySysParamAddEdit } from './redux/security/sysParam-addedit';
import { securityUser } from './redux/security/user';
import { securityAssign } from './redux/security/assign';
import { securityPwdReset } from './redux/security/pwdReset';
import { securityUserAddEdit } from './redux/security/user-addedit';
import { securityDataDict } from './redux/security/dataDict';
import { securityDataDictAddEdit } from './redux/security/dataDict-addedit';
import { securityNode } from './redux/security/node';
import { securityNodeAddEdit } from './redux/security/node-addedit';
import { securityNodeSetMateriallist } from './redux/security/node-setMateriallist';
import { publicBanner } from './redux/public/banner';
import { publicBannerAddEdit } from './redux/public/banner-addedit';
import { publicAboutusAddEdit } from './redux/public/aboutus-addedit';
import { publicHotLineAddEdit } from './redux/public/hotLine-addedit';
import { publicTimeAddEdit } from './redux/public/time-addedit';
import { publicNotice } from './redux/public/notice';
import { publicNoticeAddEdit } from './redux/public/notice-addedit';
import { generalTextParam } from './redux/general/text-param';
import { generalTextParamAddEdit } from './redux/general/text-param-addedit';
import { analysisInsuranceAmount } from './redux/analysis/insuranceAmount';

// 邀请好友
import { inviteFriendsMyHref } from './redux/inviteFriends/myHref';

// 直推好友
import { inviteFriendsDirectRecommend } from './redux/inviteFriends/directRecommend';

// 间推好友
import { inviteFriendsInDirectRecommend } from './redux/inviteFriends/inDirectRecommend';

// 好友 - 佣金明细
import { inviteFriendsDirectRecommendAddedit } from './redux/inviteFriends/directRecommend-addedit';

// 账户查询 -- 账户查询
import { bonusManagementAccount } from './redux/bonusManagement/account';

// 账户查询 -- 流水查询
import { bonusManagementLedger } from './redux/bonusManagement/ledger';
// import { accountQueryWaterAddedit } from './redux/accountQuery/water-addedit';

export default combineReducers({
  user,
  menu,
  modalDetail,
  securityRole,
  securityRoleAddEdit,
  securityMenu,
  securityMenuAddEdit,
  securityUser,
  securityAssign,
  securityPwdReset,
  securitySysParam,
  securitySysParamAddEdit,
  securityUserAddEdit,
  securityDataDict,
  securityDataDictAddEdit,
  securityNode,
  securityNodeAddEdit,
  securityNodeSetMateriallist,
  publicHotLineAddEdit,
  publicBanner,
  publicBannerAddEdit,
  publicAboutusAddEdit,
  publicTimeAddEdit,
  publicNotice,
  publicNoticeAddEdit,
  generalTextParam,
  generalTextParamAddEdit,
  analysisInsuranceAmount,
  inviteFriendsMyHref,
  inviteFriendsDirectRecommend,
  inviteFriendsInDirectRecommend,
  inviteFriendsDirectRecommendAddedit,
  bonusManagementAccount,
  bonusManagementLedger
});
