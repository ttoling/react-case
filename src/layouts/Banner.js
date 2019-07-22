import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../assets/css/banner.module.css'
export default class Banner extends Component{
  state={
    Blist:[]
  };
  componentDidMount() {
    axios({
      url:'/mock/banner',
      params:{_page:1,_limit:4}
    }).then(
        res => this.setState({Blist:res.data.data})
    )
  }
  render(){
    return (
        <div className={styles['banner']}>
          <ReactSwipe
              className={styles['carousel']}
              swipeOptions={{
                auto:2000,
                speed:100,
              }}
          >
            {
              this.state.Blist.map(item => (
                  <Link
                      key={item.id}
                      data={item}
                      dataname="banner"
                      to='/detail/`${item.id}`'
                  ><img src={item.banner} alt=""/></Link>
              ))
            }
          </ReactSwipe>
        </div>
    )
  }
}