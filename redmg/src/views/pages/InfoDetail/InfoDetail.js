import React, { Component } from 'react';
import TopNav from '../../../components/Zqx/TopNav/TopNav';
import Note from '../../../components/Hyz/InfoDetail/Note';
import Topic from '../../../components/Hyz/InfoDetail/Topic';
import style from './InfoDetail.module.css'
import Userinfodetail from '../../../components/Hyz/Userinfodetail/Userinfodetail';


class InfoDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:1
        }

        // 绑定this
        this.changeNav=this.changeNav.bind(this)
    }

    changeNav(ind){
        this.setState({
            ind
        })
    }

    showCom(){
        if(this.state.ind == 1){
            return <Note />
        }
        return <Topic />;
    }
    render() {
        return (
            <div>
                <TopNav />
               <div className={style.infobox}>
                   <div className={style.w}>
                       <div className={style.gengrxx}>
                       <Userinfodetail />
                       </div>
                       <ul className={style.infonav}>
                       <li onClick={()=>{this.changeNav(1)}}  className={this.state.ind == 1 ? style.actives:' '}>笔记</li>
                       <li onClick={()=>{this.changeNav(2)}}  className={this.state.ind == 2 ? style.actives:' '}>专辑</li>    
                       </ul>
                       {this.showCom()}
                   </div>
               </div>
            </div>
        );
    }
}

export default InfoDetail;