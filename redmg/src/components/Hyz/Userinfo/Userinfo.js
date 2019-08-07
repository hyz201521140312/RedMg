import React, { Component } from 'react';
import style from './Userinfo.module.css'
import {Link} from 'react-router-dom'
class Userinfo extends Component {
    render() {
        return (
            <div className={style.box}>
                <div className={style.shang}>笔记作者</div>
                <Link to="/info">
                <div className={style.zhong}>
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3923012461,709726096&fm=26&gp=0.jpg"  alt="头像" />
                    <div>
                      <h3>一叶子</h3>
                      <span>我爱文档</span>
                    </div>       
                </div>
                </Link>
                <ul className={style.xia}>
                  
                      <li>
                          <p>笔记</p>
                          <p>514</p>
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

export default Userinfo;