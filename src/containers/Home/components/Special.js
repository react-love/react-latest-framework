/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'

/*files*/
const zht_1 = require('./files/zht1.jpg')
const zht_2 = require('./files/zht2.jpg')

const Special = () => {
    return (
        <div className="style_main">
            <div className="style_div">
                <div className="style_left">
                    <img
                        className="style_img"
                        src={zht_1}
                    />
                </div>
                <div className="style_right">
                    <img
                        className="style_img"
                        src={zht_2}
                    />
                </div>
            </div>
        </div>
    )
}
export default Special