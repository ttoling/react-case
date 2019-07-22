import React,{Component} from 'react';
import styles from './assets/css/list.module.css'
import {Link} from 'react-router-dom'
export default class List extends Component{
  render(){
    let {data,dataName}=this.props;
    return (
        <div className={styles['list']}>
          <Link
              to={{pathname:'/detail/'+data.id,search:`dataName=${dataName}`}}
          >
            <img src={data.img} alt=""/>
            <h4>{data.title}</h4>
            <p><span>{data.price}</span><i/></p>
          </Link>
        </div>
    )
  }
}
