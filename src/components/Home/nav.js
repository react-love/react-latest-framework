/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react';
import PropTypes from 'prop-types';

/*const*/
import * as con from 'utils/const';

/*files*/
const nav_1 = require('./files/nsyjr.png');
const nav_2 = require('./files/nlswx.png');
const nav_3 = require('./files/nflwx.png');
const nav_4 = require('./files/nyysj.png');
const nav_5 = require('./files/nxxjs.png');
const nav_6 = require('./files/nyssj.png');
const nav_7 = require('./files/nyyjs.png');
const nav_8 = require('./files/nydjk.png');
const nav_9 = require('./files/nother.png');


export class Nav extends React.Component {
    // 自定义图片路径数组
    static navImage = {
        [con.NAV_IMAGE_1]: nav_1,
        [con.NAV_IMAGE_2]: nav_2,
        [con.NAV_IMAGE_3]: nav_3,
        [con.NAV_IMAGE_4]: nav_4,
        [con.NAV_IMAGE_5]: nav_5,
        [con.NAV_IMAGE_6]: nav_6,
        [con.NAV_IMAGE_7]: nav_7,
        [con.NAV_IMAGE_8]: nav_8,
        [con.NAV_IMAGE_9]: nav_9
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (isEqual(this.props, nextProps) || !isEmpty(this.props)) {
            return false
        }
        return true
    }

    render() {
        const { title, img, index, handleClick } = this.props
        // 如果是服务器传递过来的图标，就用img参数，否则就用自定义参数
        //这个组件只有一个li标签包裹，通过container页面调用来实现组件的复用
        return (
            <li className="style_li" onClick={handleClick}>
                <img src={Nav.navImage[index+1]} className="style_img" />
                <span className="style_span">{title}</span>
            </li>
        )
    }
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    index: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
}