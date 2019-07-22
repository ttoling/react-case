import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../assets/css/swiper.module.css';
export default class Swiper extends Component{
  render() {
    let {data,dataName}=this.props;
    return (
        <div className={styles['swiper']}>
                  <Link
                      to={{pathname:'/detail'+data.id,
                      search:`dataName=${dataName}`
                      }}
                      className={styles['imgbox']}
                  >
                      <img src={data.img} alt=""/>
                      <h4>{data.title}</h4>
                      <p><span>{data.price}</span> <i/></p>
                  </Link>
        </div>
    )
  }
}