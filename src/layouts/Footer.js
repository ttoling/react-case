import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from '../assets/css/footer.module.css'
export default class Footer extends Component{
  render(){
    return (
          <div className={styles['Footer']}>
            <ul>
              <li className={styles['home']}>
                <NavLink to="/home" activeClassName={styles.active}>
                  <i/>
                  首页
                </NavLink>
              </li>
              <li className={styles['classify']}>
                <NavLink to="/classify" activeClassName={styles.active}>
                  <i/>
                  分类
                </NavLink>
              </li>
              <li className={styles['find']}>
                <NavLink to="/find" activeClassName={styles.active}>
                  <i/>
                  发现
                </NavLink>
              </li>
              <li className={styles['mycart']}>
                <NavLink to="/mycart" activeClassName={styles.active}>
                  <i/>
                  购物车
                </NavLink>
              </li>
              <li className={styles['user']}>
                <NavLink to="/user" activeClassName={styles.active}>
                  <i/>
                  我的
                </NavLink>
              </li>
            </ul>
          </div>
    )
  }
}