import React from 'react'
import PropTypes from 'prop-types'

/*const*/
import * as con from 'utils/const'
import styles from './styles/nav.less'

// 自定义图片路径数组
const navImage = {
  [con.NAV_IMAGE_1]: require('./files/nsyjr.png'),
  [con.NAV_IMAGE_2]: require('./files/nlswx.png'),
  [con.NAV_IMAGE_3]: require('./files/nflwx.png'),
  [con.NAV_IMAGE_4]: require('./files/nyysj.png'),
  [con.NAV_IMAGE_5]: require('./files/nxxjs.png'),
  [con.NAV_IMAGE_6]: require('./files/nyssj.png'),
  [con.NAV_IMAGE_7]: require('./files/nyyjs.png'),
  [con.NAV_IMAGE_8]: require('./files/nydjk.png')
}

const Nav = props => {
  const { data = [], handleClick, col = 4 } = props
  return (
    <ul className={styles.style_ul}>
      {data.map((v, key) => {
        if (key < 8) {
          return (
            <li
                className={styles.style_li}
                key={key}
                onClick={() => handleClick(v.text)}
                style={{ width: 100 / col + '%' }}
            >
              <img className={styles.style_img}
                  src={navImage[key + 1]}
                   alt=""
              />
              <span className={styles.style_span}>{v.text}</span>
            </li>
          )
        } else {
          return []
        }
      })}
    </ul>
  )
}
Nav.propTypes = {
  data: PropTypes.array.isRequired
}
export default Nav
