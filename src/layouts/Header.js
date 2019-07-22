import React,{Component} from 'react';
import styles from '../assets/css/header.module.css'
export default class Header extends Component{
  render(){
    return (
        <div className={styles['header']}>
          <div className={styles['scan']}>
          </div>
          <div className={styles['search']}>
            <input type="search" placeholder="请输入关键字"/>
          </div>
          <div className={styles['news']}>
          </div>
        </div>
    )
  }
}