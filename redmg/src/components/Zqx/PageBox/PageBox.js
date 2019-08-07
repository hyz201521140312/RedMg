import React, { Component } from 'react';
import style from './PageBox.module.css'     //引入局部css
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class PageBox extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag:'视频'
        }
        this.showvplay=this.showvplay.bind(this)
    }

    showvplay(){
        if(this.state.flag==='视频'){
            return  <Icon type="play-circle" />
        }
    } 
    render() {
        return (
                <div className={style.mbox}>
                    
                    <img src="http://ci.xiaohongshu.com/05cbab5c-35d8-3470-9a7f-9f214d36bb48?imageView2/2/w/1080/format/jpg" alt="" />
                    <div className={style.mtitle}>
                        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                    </div>
                    <div className={style.mss}>
                        <img src="http://ci.xiaohongshu.com/05cbab5c-35d8-3470-9a7f-9f214d36bb48?imageView2/2/w/1080/format/jpg" alt="" />
                        <span className={style.myname}>枫叶11111</span>
                        <div className={style.mright}><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /><span className={style.mnum}>47</span></div>
                    </div>
                    <span className={style.mplay}>{this.showvplay()}</span>
                    <div className={style.mzhe}></div>
                    
                </div>
               
        );
    }
}

export default PageBox;