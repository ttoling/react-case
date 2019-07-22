import React,{Component} from "react";
import styles from '../assets/css/user.module.css'
import notice from '../assets/img/notice.png'
import userIcon from '../assets/img/user-icon.png'
import {Link} from "react-router-dom";
import { NavBar,Grid } from 'antd-mobile';
import List from "../components/List/List";
import axios from "axios";
export default class User extends Component{
  state={
    list:[],
    arr:[
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"我的绿卡"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"收货地址"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"邀请有礼"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"联系客服"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"礼品卡"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"扫一扫"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"意见反馈"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"设置"
      },
      {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"企业采购"
      }
    ],
  };
  componentDidMount(){
    axios({
      url:'/mock/home',
    }).then(
        res => this.setState({list:res.data.data})
    )
  }
  render(){
    return (
        <div className={styles['user']}>
          <div className={styles['title']}><b/><img src={notice} alt=""/></div>
          <div className={styles['userdetail']}>
            <div className={styles['user-box']}>
              <Link to="/userdetail"><img alt="" src={userIcon} className={styles['user-icon']}/></Link>
              <div className={styles['user-name']}>
                <p>用户名</p>
                <span>手机号</span>
              </div>
              <div className={styles['jifen']}>签到领积分</div>
            </div>
            <div className={styles['vip']}>
              <p>开通会员卡，一年预计节省9999.00元</p>
              <span>立即开通</span>
            </div>
          </div>
          <div className={styles['coupon']}>
            <ul>
              <li>优惠券<strong>2</strong>张</li>
              <li>积分<strong>567</strong>分</li>
            </ul>
          </div>
          <div className={styles['navbar']}>
              <NavBar
                  mode="light"
                  leftContent="我的订单"
                  rightContent="查看全部订单>"
              />
          </div>
          <div className={styles['my-order']}>
            <ul>
              <li className={styles['aplay']}>
                <Link to="">
                  <i/>
                  待支付
                </Link>
              </li>
              <li className={styles['receive']}>
                <Link to="">
                  <i/>
                  待收货
                </Link>
              </li>
              <li className={styles['assess']}>
                <Link to="">
                  <i/>
                  待评价
                </Link>
              </li>
              <li className={styles['refund']}>
                <Link to="">
                  <i/>
                  售后/退款
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['common-use']}>
            <div className={styles['sub-title']}>常用功能</div>
            <Grid data={this.state.arr} columnNum={4} />
          </div>
          <div className={styles['goods-list']}>
            <div className={styles['title']}>
              <i/>
              <h3 className={styles['title-h3']}>猜你喜欢</h3>
            </div>
            {
              this.state.list.map(item=>(
                  <List
                      key={item.id}
                      data={item}
                      dataName="home"
                  />
              ))
            }
          </div>
        </div>
    )
  }
}