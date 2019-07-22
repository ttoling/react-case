import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import styles from "./asstes/css/cell.module.css";
export default class Cell extends Component{
  render(){
    return (
        <div className={styles['cell']}>
          <ul>
            <li className={styles['fruits']}>
              <Link to="/classify">
                <i/>
                水果
              </Link>
            </li>
            <li className={styles['vegetables']}>
              <Link to="/classify">
                <i/>
                蔬菜
              </Link>
            </li>
            <li className={styles['meat']}>
              <Link to="/classify">
                <i/>
                肉蛋
              </Link>
            </li>
            <li className={styles['fish']}>
              <Link to="/classify">
                <i/>
                水产
              </Link>
            </li>
            <li className={styles['seafood']}>
              <Link to="/classify">
                <i/>
                海鲜
              </Link>
            </li>
            <li className={styles['snacks']}>
              <Link to="/classify">
                <i/>
                零食
              </Link>
            </li>
            <li className={styles['milk']}>
              <Link to="/classify">
                <i/>
                乳品
              </Link>
            </li>
            <li className={styles['bread']}>
              <Link to="/classify">
                <i/>
                烘焙
              </Link>
            </li>
            <li className={styles['quicklyFood']}>
              <Link to="/classify">
                <i/>
                速食
              </Link>
            </li>
            <li className={styles['grain']}>
              <Link to="/classify">
                <i/>
                粮油
              </Link>
            </li>
          </ul>
        </div>
    )
  }
}
