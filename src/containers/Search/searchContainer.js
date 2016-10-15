/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*actions*/
import * as searchActions from 'actions/search';

import { Header } from 'components/Search/header';
import { HotSearch } from 'components/Search/HotSearch';

@connect(
    state => state,
    dispatch => bindActionCreators(searchActions, dispatch)
)
export class SearchContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.search) {
            this.props.receiveHotSearch();
        }
    }

    componentDidMount() {
        console.log("渲染完成打印");
    }

    render() {
        return (
            <div>
                <Header />
                <HotSearch
                    hotList={this.props.search}
                />
            </div>
        )
    }
}