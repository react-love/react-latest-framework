/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/*const*/
import * as con from 'utils/const';

/*files*/
const zht_1 = require('./files/zht1.jpg');
const zht_2 = require('./files/zht2.jpg');

export class Special extends Component {

    render() {
        let style_main = {
            width: '100%', background: '#fff', padding: '5px 0', overflow: 'hidden'
        }
        let style_p = {
            fontSize: '0.9em', padding: '5px 20px', margin: 0
        }
        let style_div = {
            width: '90%', margin: '0 auto'
        }
        let style_left = {
            width: '50%', height: 'auto', display: 'inline-block', boxSizing: 'border-box', float: 'left', textAlign: 'left'
        }
        let style_right = {
            width: '50%', height: 'auto', display: 'inline-block', boxSizing: 'border-box', float: 'left', textAlign: 'right'
        }
        let style_img = {
            width: '95%', height: 'auto', border: '1px solid #e8e8e8', verticalAlign: 'middle', outline: 'none'
        }
        return (
            <div style={style_main}>
                <p style={style_p}>专题</p>
                <div style={style_div}>
                    <div style={style_left}>
                        <img src={zht_1} style={style_img} />
                    </div>
                    <div style={style_right}>
                        <img src={zht_2} style={style_img} />
                    </div>
                </div>
            </div>
        )
    }
}