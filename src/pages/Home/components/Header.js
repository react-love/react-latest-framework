import React from 'react'
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types'
import styles from './styles/header.less'

const Header = props => {
  const { title, imgUrl, linkTo, bgColor } = props
  //提供4个接口参数给container做设置，可以不传参。
  return (
    <header className={styles.header}
        style={bgColor}
    >
      {title}
      <Link className={styles.a_link}
          to={linkTo}
      >
        <img className={styles.a_img}
            src={imgUrl}
             alt=""
        />
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
