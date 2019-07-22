import React,{Component} from "react";
import styles from '../assets/css/mycart.module.css'
import List from "../components/List/List";
import axios from "axios";
import {Link} from "react-router-dom";

export default class MyCart extends Component{
  state={
    list:[],
  };
  componentDidMount(){
    axios({
      url:'/mock/home',
    }).then(
        res => this.setState({list:res.data.data})
    );
  }
  render(){
    return (
        <div className={styles['mycart']}>
          <div className={styles['header']}>
            <h3>购物车</h3>
          </div>

          <div className={styles['mycart-list']}>
            <div className={styles['showlist']}>购物车里空空如也.....</div>
            <Link to="/home">去购物</Link>
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
          <div className={styles['settlement']}>
            <i/>
            <div className={styles['gosettlement']}>
            <span>合计<b>￥00.00元</b></span>
            <Link to="/settlement">去结算</Link>
            </div>
          </div>
    </div>
    )
  }
}