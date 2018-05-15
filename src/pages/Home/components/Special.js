import React from 'react'
import styles from './styles/special.less'
/*files*/
const zht_1 = require('./files/zht1.jpg')
const zht_2 = require('./files/zht2.jpg')

const Special = () => {
  return (
    <div className={styles.style_main}>
      <div className={styles.style_div}>
        <div className={styles.style_left}>
          <img className={styles.style_img}
              src={zht_1}
               alt=""
          />
        </div>
        <div className={styles.style_right}>
          <img className={styles.style_img}
              src={zht_2}
               alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default Special
