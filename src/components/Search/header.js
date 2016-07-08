/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

const back = require('./files/back_search.png');
const search = require('./files/search_1.png');

export class Header extends Component {

    render() {
        let style_body = {
            position: 'relative', left: 0, top: 0, zIndex: 99, background: '#fff', width: '100%', textAlign: 'center'
        }
        let style_main = {
            paddingTop: '10px', paddingBottom: '10px', overflow: 'hidden'
        }
        let style_a = {
            width: '25px', height: '25px', display: 'block', zIndex: 9999, left: '10px', position: 'absolute', textDecoration: 'none'
        }
        let style_a_img = {
            width: '100%', height: 'auto'
        }
        let style_div_content = {
            width: '70%', display: 'inline-block', position: 'relative'
        }
        let style_div_img = {
            position: 'absolute', left: '2px', width: '25px', height: 'auto', top: '2px'
        }
        let style_div_input = {
            width: '100%', border: '1px solid #efefef', background: '#efefef', padding: '7px 25px 5px 25px', borderRadius: '25px', outline: 'none'
        }
        let style_right_a = {
            position: 'absolute', right: '15px', marginTop: '5px', fontSize: '1.1em', color: '#3c3c3c', textDecoration: 'none'
        }

        return (
            <div style={style_body}>
                <div style={style_main}>
                    <Link to="/home" style={style_a}>
                        <img src={back} style={style_a_img} />
                    </Link>
                    <div style={style_div_content}>
                        <img src={search} style={style_div_img} />
                        <input type="text" placeholder="搜索书名" style={style_div_input} />
                    </div>
                    <Link to="/search" style={style_right_a}>搜索</Link>
                </div>
            </div>
        )
    }
}