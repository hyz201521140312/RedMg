
import React, { Component } from 'react';
import style from './Moredetail.module.css'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'


class Moredetail extends Component {
    render() {
        return (
            <div className={style.box}>
             <Link to="/">
                <div className={style.zhong}>
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3923012461,709726096&fm=26&gp=0.jpg" alt="头像" />
                    <div>
                      <h3>留学中介的选择</h3>
                      <span><Icon type="heart" />  111</span>
                    </div>       
                </div>
             </Link>
            </div>
        );
    }
}

export default Moredetail;