import React from 'react';
import ReactDom from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  Select,
  Button
} from 'antd';
import fetch from 'common/js/fetch';
import './inviteFriends.css';
var QRCode = require('qrcode.react');

const Option = Select.Option;
export default class SelectSizesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'http://www.baidu.com',
      value: 'rjn文字链接：轻点链接，轻松赢取百万大礼包。http://www.xxx.com?xxx=23',
      copied: false
    };
  }
  //  页面加载前调用
  componentDidMount() {
  }
  click = () => {
    let erweima = document.getElementById('erweima');
    let download = document.getElementById('download');
    let canvas = erweima.getElementsByTagName('canvas')[0];
    var url = canvas.toDataURL('image/jpeg');
    download.setAttribute('href', url);
    download.click();
  }

  render() {
    const {
      size
    } = this.state;
    return (
      <div className="wrap">
        <div className="text">
          <input className="txt" value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
          <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button type="primary">复制</Button>
        </CopyToClipboard>
        </div>
        <div className="main">
          <div className="qr">
            <div className="bg1">
                <div className="erweima" id="erweima">
                  <QRCode size={100} value={this.state.name}/>
                </div>
            </div>
            <Button type="primary">下载</Button>
          </div>
          <div className="qr">
            <div className="bg2">
                <div className="erweima" id="erweima">
                  <QRCode size={100} value={this.state.name}/>
                </div>
            </div>
            <Button type="primary">下载</Button>
          </div>
        </div>
      </div>
    );
  }
}