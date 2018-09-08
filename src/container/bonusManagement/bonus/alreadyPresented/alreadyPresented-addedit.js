import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/alreadyPresented-addedit';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
    state => state.bonusManagementAlreadyPresentedAddedit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class PresentedAddedit extends React.Component {
    render() {
        const fields = [{
            title: '用户',
            field: '用户',
            readonly: true
        }, {
            title: '提成项',
            field: 'title2',
            readonly: true
        }, {
            title: '提成项说明',
            field: 'title3',
            readonly: true
        }, {
            title: '提成金额',
            field: 'title4',
            readonly: true
        }, {
            title: '发生时间',
            field: '申请时间',
            readonly: true,
            type: 'date',
            rangedate: ['applyDatetimeStart', 'applyDatetimeEnd'],
            render: (v, d) => {
                return d.dateTimeFormat;
            }
        }, {
            title: '状态',
            field: 'title5',
            type: 'select',
            readonly: true
        }, {
            title: '结算人',
            field: 'title5',
            readonly: true
        }, {
            title: '结算时间',
            field: 'title5',
            readonly: true
        }, {
            title: '结算说明',
            field: 'title6',
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

export default PresentedAddedit;
