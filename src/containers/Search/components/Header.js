/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

const back = require('./files/back_search.png')
const search = require('./files/search_1.png')

//该组件没有做无状态优化处理，根据其他几个组件的优化方式，可以自行思考
export default class Header extends React.Component {
    handleChange = (event) => {
        this.props.upDateValue(event.target.value);
    }
    render() {
        const { handleClick, currentHot } = this.props
        return (
            <div className="style_body">
                <div className="style_main">
                    <Link
                        className="style_a"
                        onClick={() => handleClick('right')}
                        to="/"
                    >
                        <img
                            className="style_a_img"
                            src={back}
                        />
                    </Link>
                    <div className="style_div_content">
                        <img
                            className="style_div_img"
                            src={search}
                        />
                        <input
                            className="style_div_input"
                            onChange={this.handleChange}
                            placeholder="搜索书名"
                            type="text"
                            value={currentHot}
                        />
                    </div>
                    <Link
                        className="style_right_a"
                        to="/search"
                    >搜索</Link>
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    handleClick: PropTypes.func.isRequired,
    currentHot: PropTypes.string.isRequired,
    upDateValue: PropTypes.func.isRequired
}