/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getClientHeight from 'utils/getClientHeight'
/*actions*/
import { receiveHotSearch } from 'actions/search'

import MyJRoll from 'react-roll-container'
import withSetTitle from '../Commons/withSetTitle'
import Header from './components/Header'
import HotSearch from './components/HotSearch'

import './styles/search.less'

@connect(
    state => ({...state.search}),
    dispatch => bindActionCreators({receiveHotSearch}, dispatch)
)
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHot: '',
            height: getClientHeight
        }
    }
    componentDidMount() {
        this.props.receiveHotSearch()
        this.getScrollHeight()
    }
    getScrollHeight = () => {
        const header = document.querySelector('.style_body')
        const height = getClientHeight - header.offsetHeight
        this.setState(() => ({height}))
    }
    upDateValue = (value) => {
        this.setState({currentHot: value})
    }
    hotClick = (text) => {
        this.setState(() => { return {currentHot: text} })
    }
    render() {
        const { hotData=[] } = this.props
        const { currentHot, height } = this.state
        return (
            <div style={{height: '100vh'}}>
                <Header
                    currentHot={currentHot}
                    upDateValue={this.upDateValue}
                />
                <MyJRoll
                    bgColor={'#fff'}
                    height={height + 'px'}
                >
                    <p className="search-hot-title">
                        <i className="fa fa-fire" />
                        <span>热门搜索</span>
                    </p>
                    <p className="style_div_p">
                        {
                            hotData.map((elem, index) =>
                                <HotSearch
                                    currentHot={currentHot}
                                    hotClick={() => this.hotClick(elem.text)}
                                    hotText={elem.text}
                                    key={index}
                                />
                            )
                        }
                    </p>
                </MyJRoll>
            </div>
        )
    }
}
Search.propTypes = {
    hotData: PropTypes.array
}
export default withSetTitle(Search, '搜索')