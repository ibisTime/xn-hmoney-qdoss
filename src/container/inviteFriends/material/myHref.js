import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import html2canvas from 'html2canvas';
import {Button} from 'antd';
import { getSystemConfigCkey } from 'api/general';
import { getUser } from 'api/user';
import './myHref.css';
import {getUserId} from 'common/js/util';

var QRCode = require('qrcode.react');

export default class SelectSizesDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            userName: '',
            copied: false
        };
    }

    componentDidMount() {
        Promise.all([
            getSystemConfigCkey('invite_url'),
            getUser()
        ]).then(([data, userData]) => {
            this.setState({
                userName: userData.realName,
                name: data.cvalue + '/user/register.html?inviteCode=' + getUserId(),
                value: '文字链接：轻点链接，轻松赢取百万大礼包。' + data.cvalue + '/user/register.html?inviteCode=' + getUserId()
            });
        }).catch(() => this.setState({fetching: false}));
    }

    download(idx) {
        html2canvas(this['bg' + idx]).then((canvas) => {
            let down = document.getElementById('down');
            var url = canvas.toDataURL('image/png');
            down.setAttribute('href', url);
            down.click();
        });
    }

    render() {
        const {
            size
        } = this.state;
        return (
            <div className="wrap">
                <div className="text">
                    <div className="txt"
                           onChange={({target: {value}}) => this.setState({value, copied: false})}>{this.state.value}</div>
                    <CopyToClipboard text={this.state.name}
                                     onCopy={() => this.setState({copied: true})}>
                        <Button type="primary">复制</Button>
                    </CopyToClipboard>
                </div>
                <div className="main">
                    <div className="qr">
                        <div className="bg1" ref={bg0 => this.bg0 = bg0}>
                            <div className="erweima ewm1" id="erweima">
                                <QRCode size={183} value={this.state.name}/>
                            </div>
                        </div>
                        <a id="down" download="bg1"></a>
                        <Button type="primary" onClick={() => this.download(0)}>下载</Button>
                    </div>
                    <div className="qr">
                        <div className="bg2" ref={bg1 => this.bg1 = bg1}>
                            <div className="top">我是{this.state.userName}，邀请您注册FUNMVP，获得奖励。</div>
                            <div className="erweima ewm2" id="erweima">
                                <QRCode size={115} value={this.state.name}/>
                            </div>
                        </div>
                        <a id="down" download="bg2"></a>
                        <Button type="primary" onClick={() => this.download(1)}>下载</Button>
                    </div>
                </div>
            </div>
        );
    }
}