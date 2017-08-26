/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { title, imgUrl, linkTo, bgColor, handleClick } = props
    //提供4个接口参数给container做设置，可以不传参。
    return (
        <header className='header' style={bgColor}>
            {title}
            <Link to={linkTo} className="a_link" onClick={() => handleClick('left')}>
                <img src={imgUrl} className="a_img" />
            </Link>
        </header>
    )
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
Header.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    bgColor: PropTypes.object.isRequired
}
export default Header