import React from 'react';
import {connect} from 'react-redux';
import {Card, Row, Col, Button, Spin} from 'antd';
import {initData} from '@redux/bonusManagement/account';
import {moneyFormat} from 'common/js/util';

const {Meta} = Card;

@connect(
    state => state.bonusManagementAccount,
    {initData}
)
class Account extends React.Component {
    componentDidMount() {
        this.props.initData();
    }

    goFlow1 = (accountNumber) => {
        this.props.history.push(`/account/account/mentionMoney?accountNumber=${accountNumber}`);
    }

    goFlow2 = (accountNumber) => {
        this.props.history.push(`/account/account/ledger?isAccount=1&accountNumber=${accountNumber}`);
    }

    render() {
        const unsettledLoan = this.props.unsettledLoan;
        const symbol = 'X';

        return (
            <div>
                <Row >
                    <Col style={{marginBottom: '20px', width: '500px'}}>
                        <Card title="X币余额" extra={
                            moneyFormat(unsettledLoan['accountData'] ? unsettledLoan['accountData'].amount : '0', '', symbol)
                        }>{<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', overflow: 'hidden'}}>
                            <div style={{width: '210px', float: 'left', textAlign: 'left'}}>
                                <p>
                                    <span>未结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].unsettleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>已结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].settleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>币币交易奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].bbTradeCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>场外交易奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].ccTradeCount : '0', '', symbol)}</span>
                                </p>
                            </div>
                            <div style={{width: '240px', float: 'right', textAlign: 'left'}}>
                                <p>
                                    <span>不结算奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].nosettleCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>拉新奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].regRefCount : '0', '', symbol)}</span>
                                </p>
                                <p>
                                    <span>平台特殊奖励：{moneyFormat(unsettledLoan['statisticsData'] ? unsettledLoan['statisticsData'].platCount : '0', '', symbol)}</span>
                                </p>
                            </div>
                            <div style={{width: '100%', float: 'left', marginTop: '15px', textAlign: 'center'}}>
                                <Button onClick={() => this.goFlow1(unsettledLoan['accountData'] ? unsettledLoan['accountData'].accountNumber : '')} type="primary">提币</Button>
                                <Button onClick={() => this.goFlow2(unsettledLoan['accountData'] ? unsettledLoan['accountData'].accountNumber : '')} type="primary" style={{marginLeft: '90px'}}>资金流水</Button>
                            </div>
                        </div>}</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Account;
