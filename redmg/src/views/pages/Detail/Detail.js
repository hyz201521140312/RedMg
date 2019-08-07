import React, { Component } from "react";
import style from "./Detail.module.css";
import TopNav from "../../../components/Zqx/TopNav/TopNav";
import RotaryMap from "../../../components/Hyz/RotaryMap/RotaryMap";
import Userinfo from "../../../components/Hyz/Userinfo/Userinfo";
import Moredetailbox from "../../../components/Hyz/Moredetailbox/Moredetailbox";
import Comment from "../../../components/Hyz/Comment/Comment";
import Havevideo from "../../../components/Hyz/Havevideo/Havevideo";

import axios from "../../../model/Axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      gcx: ""
    };
  }

  componentDidMount() {
    axios
      .get("/pages/xiangqing?kw1=8")
      .then(res => {
        let newdata = res.data[0];
        newdata.addtime = new Date(+new Date(newdata.addtime) + 8 * 3600 * 1000).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
        this.setState({
          data: newdata,
          gcx: res.data[0].gcx
        });
        console.log(this.state.data);
        console.log(this.state.gcx);
      })
      .catch(err => {
        console.log(err);
      });
  }

  showCom() {
    if (this.state.gcx === "视频") {
      return <Havevideo data={this.state.data} />;
    } else {
      return <RotaryMap data={this.state.data} />;
    }
  }
  render() {
    return (
      <div>
        <TopNav />
        <div className={style.conbox}>
          <div className={style.w}>
            <div className={style.leftcont}>
              <div> {this.showCom()} </div>
              <div className={style.comments}>
                <h2> 评论区 </h2> <Comment />
              </div>{" "}
            </div>{" "}
            <div className={style.rightcont}>
              <div className={style.ups}>
                <Userinfo />
              </div>{" "}
              <div className={style.downs}>
                <Moredetailbox />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Detail;
