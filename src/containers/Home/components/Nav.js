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
import styles from './styles/nav.less'

const Nav = (props) => {
    const { data=[], handleClick } = props
    return (
        <ul className={styles.style_ul}>
            {
                data.map((v, key) => {
                    return (
                        <li
                            className={styles.style_li}
                            key={key}
                            onClick={() => handleClick(v.text)}
                        >
                            <img
                                className={styles.style_img}
                                src={navImage[key+1]}
                            />
                            <span className={styles.style_span}>{v.text}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
Nav.propTypes = {
    data: PropTypes.array.isRequired
}
export default Nav