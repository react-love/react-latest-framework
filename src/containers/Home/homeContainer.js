/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/
import * as navActions from 'actions/nav';

/*component*/
import { Header } from 'components/Home/header';
import { Nav } from 'components/Home/nav';
import { Special } from 'components/Home/Special';

/*files*/
const search = require('./files/search.svg');

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state） 或者 state => state.home（传递指定的state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => state,
    dispatch => bindActionCreators(navActions, dispatch)
)
export class HomeContainer extends Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        const { navMain } = this.props.nav //这个叫做es6的解构赋值
        if (navMain.length === 0) {
            this.props.getNav();
        }
    }

    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        this.props.history.push('/')
    }

    render() {
        const { navMain } = this.props.nav
        //自定义样式
        let DIVClass = classNames({
            'main-body': false //true表示显示，false表示不显示该样式，可以根据state来判断是否显示
        })
        //还可以通过自定义样式传递给组件
        let bgClass = {background: '#00bb9c'} //定义一个背景色的变量
        return(
            <div className={DIVClass}>
                <Header
                    title="react-redux架构"
                    imgUrl={search}
                    linkTo="/search"
                    bgColor={bgClass}
                    // {...this.props}当你需要在container调用子组件内部的属性，需要加上该语句，比如组件内部的ref
                />
                <div className="style_div">
                    <ul className="style_ul">
                    {
                        navMain.length > 0 ?
                            navMain.map((elem, index) => {
                                return (
                                    <Nav
                                        key={index}
                                        title={elem.text}
                                        index={index}
                                        handleClick={() => this.handleClick()}
                                    />
                                )
                            }) : ''
                    }
                    </ul>
                </div>
                <Special />
            </div>
        );
    }
}