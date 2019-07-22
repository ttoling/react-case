import React,{Component} from "react";
import styles from '../assets/css/find.module.css'
import Swiper from "../layouts/Swiper";
import axios from "axios";
export default class Find extends Component{
  state={
    list:[],
    navlist:[],
    childlist:[]
  };
  componentDidMount(){
    axios({
      url:'/mock/find',
      params:{_page:1,_limit:10}
    }).then(
        res => this.setState({list:res.data.data})
    );
    axios({
      url:'/mock/findNav',
      params:{_page:1,_limit:3 }
    }).then(
        res => this.setState({navlist:res.data.data})
    );
    console.log(this.state.navlist)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('list',this.state.list.child);
    console.log('navlist',this.state.navlist);
  }
  render(){
    return (
        <div className={styles['find']}>
          <div className={styles['header']}>
            <input placeholder="搜索菜谱、食材"/>
            <i/>
          </div>
            <div className={styles['main-push']}>
              <h3>主推产品</h3>
              <div className={styles['mainPush-goods']}>
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
              <div className={styles['menu']}>
                <div className={styles['title']}>
                  <i/>
                  <h3 className={styles['title-h3']}>今日菜单</h3>
                </div>
                <div className={styles['nav']}>
                  {
                    this.state.navlist.map(item=>(
                      this.state.childlist=item.child,
                        <h3 key={item.id}>{item.title}</h3>
                    ))
                  }
                  <span>更多</span>
                </div>
                <div className={styles['content']}>
                  {
                    this.state.childlist.map(item=>(
                        <div
                            key={item.id}
                            className={styles['goods-list']}
                        >
                          <img src={item.img} alt=""/>
                          <div className={styles['goods-content']}>
                            <h4>{item.title}</h4>
                            <p><img src={item.icon} alt=""/><span>{item.auth}</span></p>
                          </div>
                        </div>
                    ))
                  }
                </div>
              </div>
            </div>
        </div>
    )
  }
}