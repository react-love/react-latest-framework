/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles/search.less'

/*actions*/
import * as searchActions from 'actions/search';
import * as globalActions from 'actions/global';

import { Header } from 'components/Search/header';
import { HotSearch } from 'components/Search/hotSearch';

@connect(
    state => state,
    dispatch => bindActionCreators({...searchActions, ...globalActions}, dispatch)
)
export default class SearchContainer extends React.Component {

    constructor(props) {
        super(props)
        this.hotClick = this.hotClick.bind(this)
        this.upDateValue = this.upDateValue.bind(this)
        this.state = {
            currentHot: ''
        }
    }

    componentWillMount() {
        this.props.receiveHotSearch()
    }

    upDateValue(value) {
        this.setState({currentHot: value})
    }

    hotClick(text) {
        this.setState({currentHot: text})
    }

    render() {
        const { hotData } = this.props.search
        const { currentHot } = this.state
        return (
            <div key={this.props} style={{height: '100vh'}}>
                <Header handleClick={this.props.currentAnimate}
                        currentHot={currentHot}
                        upDateValue={this.upDateValue}
                />
                <div>
                    <p className="search-hot-title">
                        <i className="fa fa-fire"></i>
                        <span>热门搜索</span>
                    </p>
                    <p className="style_div_p">
                        {
                            hotData.length > 0 &&
                            hotData.map((elem, index) => {
                                return (
                                    <HotSearch
                                        ref="hotSearch"
                                        key={index}
                                        hotText={elem.text}
                                        hotClick={() => this.hotClick(elem.text)}
                                        currentHot={currentHot}
                                        {...this.props}
                                    />
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        )
    }
}

SearchContainer.propTypes = {
    hotData: PropTypes.array
}
