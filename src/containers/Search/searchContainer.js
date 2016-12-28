/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './styles/search.less'

/*actions*/
import * as searchActions from 'actions/search';

import { Header } from 'components/Search/header';
import { HotSearch } from 'components/Search/HotSearch';

@connect(
    state => state,
    dispatch => bindActionCreators(searchActions, dispatch)
)
export default class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.hotClick = this.hotClick.bind(this);
    }

    componentWillMount() {
        this.props.receiveHotSearch();
    }

    componentDidMount() {
        console.log("渲染完成打印");
    }

    hotClick(text) {
        console.log(text)
    }

    render() {
        const { hotData } = this.props.search
        return (
            <div>
                <Header />
                <div>
                    <p className="search-hot-title">
                        <i className="fa fa-fire"></i>
                        <span>热门搜索</span>
                    </p>
                    <p className="style_div_p">
                        {
                            hotData.length > 0 ?
                                hotData.map((elem, index) => {
                                    return (
                                        <HotSearch
                                            ref="hotSearch"
                                            key={index}
                                            hotText={elem.text}
                                            hotClick={() => this.hotClick(elem.text)}
                                            {...this.props}
                                        />
                                    )
                                }) : ''
                        }
                    </p>
                </div>
            </div>
        )
    }
}