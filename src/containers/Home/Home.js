/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/
import * as home from 'actions/home'
import * as global from 'actions/global'

/*component*/
import Header from './components/Header'
import Nav from './components/Nav'
import Special from './components/Special'
import BookList from './components/BookList'

/*files*/
const search = require('./files/search.svg')

import './styles/home.less'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => ({...state.home}),
    dispatch => bindActionCreators({...home, ...global}, dispatch)
)
export default class Home extends React.Component {
    componentWillMount() {
        const { navMain, bookDetails } = this.props
        if (navMain.length === 0) {
            this.props.getNav();
        }
        if (bookDetails.length === 0) {
            this.props.getBook()
        }
    }
    handleClick = () => {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
    }
    render() {
        const { navMain, bookDetails } = this.props
        //还可以通过自定义样式传递给组件
        let bgClass = { background: '#00bb9c' } //定义一个背景色的变量
        return(
            <div>
                <Header
                    bgColor={bgClass}
                    handleClick={this.props.currentAnimate}
                    imgUrl={search}
                    linkTo="search"
                    title="react-redux架构"
                />
                <div className="style_div">
                    <ul className="style_ul">
                        {
                            navMain.map((elem, index) => {
                                return (
                                    <Nav
                                        handleClick={() => this.handleClick()}
                                        index={index}
                                        key={index}
                                        title={elem.text}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <p className="style_p">专题</p>
                    <Special />
                </div>
                <div>
                    <p className="style_p">书籍列表</p>
                    {
                        bookDetails.map((ele, index) => {
                            return (
                                <BookList
                                    _id={ele._id}
                                    author={ele.author}
                                    currentPrice={ele.currentPrice}
                                    index={index + 1}
                                    key={index}
                                    originalPrice={ele.originalPrice}
                                    press={ele.press}
                                    publishedDate={ele.publishedDate}
                                    title={ele.title}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
Home.propTypes = {
    navMain: PropTypes.array,
    bookDetails: PropTypes.array,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}