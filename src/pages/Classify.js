import React,{Component} from "react";
import Header from "../layouts/Header";
import styles from '../assets/css/classify.module.css'
import axios from "axios";
export default class Classify extends Component{
  state={
    Clist:[],
    childList:[]
  };
  componentDidMount(){
    axios({
      url:'/mock/classify',
      params:{_page:1,_limit:30}
    }).then(
        res => this.setState({Clist:res.data.data})
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.state.Clist);
    // console.log(this.state.childList);
  }
  render(){
    return (
        <div>
          <Header/>
          <div className={styles['classify']}>
            <div className={styles['aside']}>
              {
                this.state.Clist.map(item => (
                    this.state.childList=item.child,
                        <h4
                            key={item.id}
                            className={styles['type-title']}
                            onClick={this.active}
                        >{item.title}
                        </h4>))}
            </div>
            <div className={styles['article']}>
              {
                this.state.childList.map((item,index)=> (
                    <div
                        key={index}
                        className={styles['goods-list']}
                    >
                      <img src={item.img} alt=""/>
                      <div className={styles['goods-content']}>
                        <h4>{item.sub_title}</h4>
                        <span>{item.des}</span>
                        <p><span>{item.price}</span><i/></p>
                      </div>
                    </div>
                ))
              }
            </div>
          </div>
        </div>

    )
  }
}