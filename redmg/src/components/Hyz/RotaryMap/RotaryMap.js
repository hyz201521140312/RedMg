import React, { Component } from "react";
import style from "./RotaryMap.module.css";
import { Icon } from "antd";

class RotaryMap extends Component {
  constructor(props) {
    super(props);
    // 放数据
    this.state = {
      ind: 0,
      data: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400062461,2874561526&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884107401,3797902000&fm=26&gp=0.jpg",
        "http://pic41.nipic.com/20140524/9643307_104442624152_2.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400062461,2874561526&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884107401,3797902000&fm=26&gp=0.jpg",
        "http://pic41.nipic.com/20140524/9643307_104442624152_2.jpg"
      ]
    };
    this.everypicHandle = this.everypicHandle.bind(this);
  }


  everypicHandle(ind) {
    if (ind === "left") {
      ind = this.state.ind - 1;
      if (ind < 0) ind = this.state.data.length - 1;
    }

    if (ind === "right") {
      ind = this.state.ind + 1;
      if (ind === this.state.data.length) ind = 0;
    }
    this.setState({
      ind: ind
    });
  }

  render() {
    return (
      <div className={style.lbbox}>
        <div className={[style.ups, style.ii].join(" ")}>
          <img src={this.state.data[this.state.ind]} />
        </div>
        <div
          onClick={() => {
            this.everypicHandle("left");
          }}
          className={style.leftde}
        >
          <Icon type="left-circle" />
        </div>
        <div
          onClick={() => {
            this.everypicHandle("right");
          }}
          className={style.rightde}
        >
          <Icon type="right-circle" />{" "}
        </div>
        <ul className={style.downs}>
          {this.state.data.map((item, i) => {
            //   console.log(item, i)
            return (
              <li
                key={i}
                onClick={() => {
                  this.everypicHandle(i);
                }}
                className={i === this.state.ind ? style.activeimg : ""}
              >
                <img src={item} alt=" " />
              </li>
            );
          })}
        </ul>
        <div className={style.titlebox}>
          {" "}
          滴👉2020公务员考试，国考省考上岸路打卡
        </div>
        <div className={style.contentsbox}>
          <p>
            现在大部分人都是低头族，长时间看手机，造成了各种猥琐肩、圆肩含胸、斜方肌增厚！！整个人的体态不挺拔，脖子又粗又短，一点气质都没有！
            想要拥有Jennie同款直角肩？坚持这5步即可拥有！还可以练出天鹅颈，改善颈纹喔！快快动起来吧
            动作1：绕颈运动 双手交握越过头顶，下方的手用力，上方手只做支撑作用
            脖子保持不动，两边各10秒，每边5组 动作2：斜方肌拉伸
            单手反向45度，放在耳侧，轻轻拉伸头部，感受颈部的拉伸
            做的时候保持腰背挺直，左右两边交替各做5组，每组10秒 动作3：肩脖按摩
            手沿脖子上下方向、锁骨肩线左右方向按 #最佳手臂训练动作# 摩
            按摩前必须涂颈霜，动作要轻柔，各做30次 动作4：颈部按摩
            双手交叉在脖子两侧自下而上按摩，能修长脖子
            务必从反重力方向按摩，各做30次 用手指关节自下而上按摩，凹显锁骨
            按摩时适当用力，做30次
          </p>
        </div>

        <ul className={style.likevd}>
          <li>
            <Icon type="heart" /> 618
          </li>
          <li>
            <Icon type="message" /> 3
          </li>
          <li>
            <Icon type="star" /> 87
          </li>
        </ul>
        <div className={style.fbtime}>发布于 07-30</div>
      </div>
    );
  }
}

export default RotaryMap;
