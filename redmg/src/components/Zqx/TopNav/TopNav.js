import React, { Component } from 'react';
import style from './TopNav.module.css'     //引入局部css
import { Icon } from 'antd';
import 'antd/dist/antd.css'; 


class TopNav extends Component {
  render() {
    return (
      <div>
        <header className={style.myh}>
          <div className={style.center}>
            <div className={[style.a,style.a1].join(' ')}>
              <img src="https://s10.mogucdn.com/mlcdn/c45406/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png" alt=""/>
              <a href="/">首页</a>
            </div>
            <div className={[style.a,style.a2].join(' ')}>
              
               <input type="text" placeholder="请输入您感兴趣的内容"/>
               <button><Icon type="search" /></button>
             
              </div>
            <div className={[style.a,style.a3].join(' ')}>
              <a href="/news">新闻中心</a>
              <a href="/about" className={style.about}>关于我们</a>
              <span>
              <a href="/login"><img src="https://s10.mogucdn.com/mlcdn/c45406/181016_143l3ehl4ebad6c2326gjk6d4h41g_48x48.png" alt=""/> 登陆</a>
              <a href="/reg">注册</a>
              </span>
            </div>
          </div>
        </header>
        <div className={style.mydiv}></div>
      </div>
    );
  }
}

export default TopNav;