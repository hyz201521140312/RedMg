import React, { Component } from 'react';
import style from './Userinfodetail.module.css'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'
class Userinfodetail extends Component {
    render() {
        return (
            <div className={style.box}>
                <Link to="/info">
                <div className={style.zhong}>
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3923012461,709726096&fm=26&gp=0.jpg"  alt="头像" />
                    <div>
                      <h3>一叶子xxxxx</h3>
                      <span>支持正能量，从我做起</span>
                      <p><Icon type="environment" /> 成都</p>
                    </div>       
                </div>
                </Link>
                <ul className={style.xia}>
                  
                      <li>
                          <p>关注</p>
                          <p>54</p>
                      </li>
                      <li>
                          <p>粉丝</p>
                          <p>5414</p>
                      </li>
                      <li>
                          <p>获赞和收藏</p>
                          <p>514</p>
                      </li>
               
                </ul>
            </div>
        );
    }
}

export default Userinfodetail;