/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react';

/*files*/
const zht_1 = require('./files/zht1.jpg');
const zht_2 = require('./files/zht2.jpg');

export class Special extends React.Component {

    render() {

        return (
            <div className="style_main">
                <div className="style_div">
                    <div className="style_left">
                        <img src={zht_1} className="style_img" />
                    </div>
                    <div className="style_right">
                        <img src={zht_2} className="style_img" />
                    </div>
                </div>
            </div>
        )
    }
}