/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

/*const*/
import * as con from 'utils/const'

// 自定义图片路径数组
const navImage = {
    [con.NAV_IMAGE_1]: require('./files/nsyjr.png'),
    [con.NAV_IMAGE_2]: require('./files/nlswx.png'),
    [con.NAV_IMAGE_3]: require('./files/nflwx.png'),
    [con.NAV_IMAGE_4]: require('./files/nyysj.png'),
    [con.NAV_IMAGE_5]: require('./files/nxxjs.png'),
    [con.NAV_IMAGE_6]: require('./files/nyssj.png'),
    [con.NAV_IMAGE_7]: require('./files/nyyjs.png'),
    [con.NAV_IMAGE_8]: require('./files/nydjk.png'),
    [con.NAV_IMAGE_9]: require('./files/nother.png')
}
const Nav = (props) => {
    const { title, img, index, handleClick } = props
    // 如果是服务器传递过来的图标，就用img参数，否则就用自定义参数
    //这个组件只有一个li标签包裹，通过container页面调用来实现组件的复用
    return (
        <li
            className="style_li"
            onClick={handleClick}
        >
            <img
                className="style_img"
                src={navImage[index+1]}
            />
            <span className="style_span">{title}</span>
        </li>
    )
}
Nav.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    index: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
}
export default Nav