/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/*actions*/
import * as search from 'actions/search'
import * as global from 'actions/global'

import Header from './components/Header'
import HotSearch from './components/HotSearch'

import './styles/search.less'

@connect(
    state => {return {...state.search}},
    dispatch => bindActionCreators({...search, ...global}, dispatch)
)
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.hotClick = this.hotClick.bind(this)
        this.upDateValue = this.upDateValue.bind(this)
        this.state = {
            currentHot: ''
        }
    }
    componentWillMount() {
        console.log('进入搜索页面')
        this.props.receiveHotSearch()
    }
    upDateValue(value) {
        this.setState({currentHot: value})
    }
    hotClick(text) {
        this.setState(() => { return {currentHot: text} })
    }
    render() {
        const { hotData } = this.props
        const { currentHot } = this.state
        return (
            <div style={{height: '100vh'}}>
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
                                        key={index}
                                        hotText={elem.text}
                                        hotClick={() => this.hotClick(elem.text)}
                                        currentHot={currentHot}
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
Search.propTypes = {
    hotData: PropTypes.array
}
