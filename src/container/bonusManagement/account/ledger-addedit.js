import React from 'react';
import {
  initStates,
  doFetching,
  cancelFetching,
  setSelectData,
  setPageData,
  restore
} from '@redux/bonusManagement/ledger-addedit';
import { getQueryString } from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
  state => state.bonusManagementLedgerAddedit,
  { initStates, doFetching, cancelFetching, setSelectData, setPageData, restore }
)
class LedgerAddedit extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
        title: '用户',
        field: 'title1',
        readonly: true,
        render: (v, d) => {
            return d.userName + '+' + d.userphone;
        }
    }, {
        title: '账户',
        field: 'title2',
        readonly: true
    }, {
        title: '关系',
        field: 'title',
        type: 'select3',
        readonly: true
    }, {
        title: '业务类型',
        field: 'title4',
        readonly: true
    }, {
        title: '变动前金额',
        field: 'title5',
        readonly: true
    }, {
        title: '变动金额',
        field: 'title6',
        amount: true,
        readonly: true
    }, {
        title: '变动后金额',
        field: 'title7',
        amount: true,
        readonly: true
    }, {
        title: '变动时间',
        field: 'title8',
        readonly: true
    }, {
        title: '备注',
        field: 'title9',
        readonly: true
    }];
    return this.props.buildDetail({
        fields,
        buttons: [{
            title: '返回',
            handler: (param) => {
              this.props.history.go(-1);
            }
        }]
    });
  }
}

export default LedgerAddedit;
