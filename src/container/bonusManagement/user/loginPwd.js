import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/loginPwd';
import { getUserId, showSucMsg, getQueryString } from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.bonusManagementLoginPwd, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class LoginPwd extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.state = {
            mobile: ''
        };
    }
    componentDidMount() {
        fetch(630067, { userId: getUserId() }).then(data => {
            this.setState({ mobile: data.mobile });
        }).catch(() => {});
    }
    render() {
        const fields = [{
            title: '手机号',
            field: 'title',
            value: this.state.mobile,
            readonly: true
        }, {
            title: '验证码',
            field: 'type',
            required: true
        }, {
            title: '登陆密码',
            field: 'urgentStatus',
            required: true
        }, {
            title: '确认登陆密码',
            field: 'urgentStatus1',
            required: true
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            beforeSubmit: {
                userId: getUserId()
            },
            buttons: [{
              title: '确认',
              handler: (param) => {
                param.operator = getUserId();
                this.props.doFetching();
                fetch(630051, param).then(() => {
                  showSucMsg('操作成功');
                  this.props.cancelFetching();
                  setTimeout(() => {
                    this.props.history.go(-1);
                  }, 1000);
                }).catch(this.props.cancelFetching);
              },
              check: true,
              type: 'primary'
            }]
        });
    }
}

export default LoginPwd;
