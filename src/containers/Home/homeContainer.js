/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    }

    componentWillMount() {
        if (this.props.nav.navMain.length === 0) {
            this.props.getNav();
        }
    }

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <Header
                    title="高校二手书城"
                    imgUrl={search}
                    linkTo="/search"
                />
                <Nav
                    navList={this.props.nav}
                />
                <Special />
            </div>
        );
    }
}