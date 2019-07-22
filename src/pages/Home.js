import React,{Component} from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import styles from '../assets/css/home.module.css'
import Cell from "../components/Cell/Cell";
import axios from 'axios'
import Swiper from "../layouts/Swiper";
import List from "../components/List/List";
import {Link} from "react-router-dom";
export default class Home extends Component{
    state={
      list:[],
      specialList:[]
    };
    componentDidMount(){
      axios({
        url:'/mock/home',
      }).then(
          res => this.setState({list:res.data.data})
      );
      axios({
        url:'/mock/special',
        params:{_page:1,_limit:4}
      }).then(
          res => this.setState({specialList:res.data.data})
      )
    }
  render(){
    return (
        <div>
          <Header/>
          <div className={styles['home']}>
            <Banner/>
            <Cell/>
            <div className={styles['limit']}>
              <div className={styles['title']}>
                <i/>
                <h3 className={styles['title-h3']}>限时抢购</h3>
                <span className={styles['title-span']}>更多</span>
              </div>
              <div className={styles['limit-goods']}>
                <div className={styles['swper-box']}>
                  {
                    this.state.list.map(item=>(
                        <div className={styles['swiper']} key={item.id}>
                          <Swiper
                              data={item}
                              dataName="home"
                          />
                        </div>

                    ))
                  }
                </div>
              </div>


            </div>

            <div className={styles['special-area']}>
              <div className={styles['title']}>
                <i/>
                <h3 className={styles['title-h3']}>特色专区</h3>
              </div>
              <div className={styles['special-content-box']}>
                {
                  this.state.specialList.map(item => (
                  <Link
                      data={item}
                      to='/detail/`${item.id}`'
                      key={item.id}
                      className={styles['special-content']}
                  >
                    <h4>{item.title}</h4>
                    <span>{item.sub_title}</span>
                    <img src={item.img} alt=""/>
                  </Link>
                  ))
                }
              </div>
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
        </div>
    )
  }
}