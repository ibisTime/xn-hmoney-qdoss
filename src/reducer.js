import {combineReducers} from 'redux';
import {user} from './redux/user';
import {menu} from './redux/menu';
import {modalDetail} from './redux/modal/build-modal-detail';
import {securityRole} from './redux/security/role';
import {securityRoleAddEdit} from './redux/security/role-addedit';
import {securityMenu} from './redux/security/menu';
import {securityMenuAddEdit} from './redux/security/menu-addedit';
import {securitySysParam} from './redux/security/sysParam';
import {securitySysParamAddEdit} from './redux/security/sysParam-addedit';
import {securityUser} from './redux/security/user';
import {securityAssign} from './redux/security/assign';
import {securityPwdReset} from './redux/security/pwdReset';
import {securityUserAddEdit} from './redux/security/user-addedit';
import {securityDataDict} from './redux/security/dataDict';
import {securityDataDictAddEdit} from './redux/security/dataDict-addedit';
import {securityNode} from './redux/security/node';
import {securityNodeAddEdit} from './redux/security/node-addedit';
import {securityNodeSetMateriallist} from './redux/security/node-setMateriallist';
import {publicBanner} from './redux/public/banner';
import {publicBannerAddEdit} from './redux/public/banner-addedit';
import {publicAboutusAddEdit} from './redux/public/aboutus-addedit';
import {publicHotLineAddEdit} from './redux/public/hotLine-addedit';
import {publicTimeAddEdit} from './redux/public/time-addedit';
import {publicNotice} from './redux/public/notice';
import {publicNoticeAddEdit} from './redux/public/notice-addedit';
import {generalTextParam} from './redux/general/text-param';
import {generalTextParamAddEdit} from './redux/general/text-param-addedit';
import {analysisInsuranceAmount} from './redux/analysis/insuranceAmount';

import {inviteFriendsMyHref} from './redux/inviteFriends/myHref';
import {inviteFriendsDirectRecommend} from './redux/inviteFriends/directRecommend';
import {inviteFriendsInDirectRecommend} from './redux/inviteFriends/inDirectRecommend';
import {inviteFriendsDirectRecommendAddedit} from './redux/inviteFriends/directRecommend-addedit';

import {bonusManagementAccount} from './redux/bonusManagement/account';
import {bonusManagementAccountList} from './redux/bonusManagement/account-list';
import {bonusManagementAccountMentionMoney} from './redux/bonusManagement/account-mentionMoney';

import {bonusManagementLedger} from './redux/bonusManagement/ledger';
import {bonusManagementLedgerAddedit} from './redux/bonusManagement/ledger-addedit';
import {bonusManagementGeneralSituation} from './redux/bonusManagement/generalSituation';
import {bonusManagementAnOpenAccountQuery} from './redux/bonusManagement/anOpenAccountQuery';
import {bonusManagementSettledAccounts} from './redux/bonusManagement/settledAccounts';
import {bonusManagementSettledAccountsAddedit} from './redux/bonusManagement/settledAccounts-addedit';
import {bonusManagementAlreadyPresented} from './redux/bonusManagement/alreadyPresented';
import {bonusManagementAlreadyPresentedAddedit} from './redux/bonusManagement/alreadyPresented-addedit';
import {bonusManagementPayPwd} from './redux/bonusManagement/payPwd';
import {bonusManagementLoginPwd} from './redux/bonusManagement/loginPwd';
import {bonusManagementOftenUseAddress} from './redux/bonusManagement/oftenUseAddress';
import {bonusManagementAnOpenAccountQueryAddedit} from './redux/bonusManagement/anOpenAccountQuery-addedit';
import {bonusManagementOftenUseAddressAddedit} from './redux/bonusManagement/oftenUseAddress-addedit';

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
    bonusManagementAccountList,
    bonusManagementAccountMentionMoney,
    bonusManagementLedger,
    bonusManagementGeneralSituation,
    bonusManagementAnOpenAccountQuery,
    bonusManagementSettledAccounts,
    bonusManagementAlreadyPresented,
    bonusManagementPayPwd,
    bonusManagementLoginPwd,
    bonusManagementOftenUseAddress,
    bonusManagementAnOpenAccountQueryAddedit,
    bonusManagementLedgerAddedit,
    bonusManagementSettledAccountsAddedit,
    bonusManagementAlreadyPresentedAddedit,
    bonusManagementOftenUseAddressAddedit
});
