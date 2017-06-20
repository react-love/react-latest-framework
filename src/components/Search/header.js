/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const back = require('./files/back_search.png');
const search = require('./files/search_1.png');

//该组件没有做无状态优化处理，根据其他几个组件的优化方式，可以自行思考
export class Header extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.upDateValue(event.target.value);
    }

    render() {
        const { handleClick, currentHot } = this.props
        return (
            <div className="style_body">
                <div className="style_main">
                    <Link to="/" className="style_a" onClick={() => handleClick('right')}>
                        <img src={back} className="style_a_img" />
                    </Link>
                    <div className="style_div_content">
                        <img src={search} className="style_div_img" />
                        <input type="text"
                               placeholder="搜索书名"
                               className="style_div_input"
                               value={currentHot}
                               onChange={this.handleChange}
                        />
                    </div>
                    <Link to="/search" className="style_right_a">搜索</Link>
                </div>
            </div>
        )
    }
}