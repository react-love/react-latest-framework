/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import styles from './styles/header.less'

const back = require('./files/back_search.png')
const search = require('./files/search_1.png')

//该组件没有做无状态优化处理，根据其他几个组件的优化方式，可以自行思考
export default class Header extends React.Component {
    handleChange = (event) => {
        this.props.upDateValue(event.target.value);
    }
    render() {
        const { currentHot } = this.props
        return (
            <div
                className={styles.style_body}
                id="styleBody"
            >
                <div className={styles.style_main}>
                    <Link
                        className={styles.style_a}
                        to="/"
                    >
                        <img
                            className={styles.style_a_img}
                            src={back}
                        />
                    </Link>
                    <div className={styles.style_div_content}>
                        <img
                            className={styles.style_div_img}
                            src={search}
                        />
                        <input
                            className={styles.style_div_input}
                            onChange={this.handleChange}
                            placeholder="搜索书名"
                            type="text"
                            value={currentHot}
                        />
                    </div>
                    <Link
                        className={styles.style_right_a}
                        to="/search"
                    >搜索</Link>
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    currentHot: PropTypes.string.isRequired,
    upDateValue: PropTypes.func.isRequired
}