/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'

/*actions*/
import * as navActions from 'actions/nav';
import * as bookActions from 'actions/book'

/*component*/
import { Header } from 'components/Home/header';

@connect(
    state => state,
    dispatch => bindActionCreators({...navActions, ...bookActions}, dispatch)
)
export default class BookListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {

        return(
            <div className="">
                <Header
                    title="react-redux架构"
                    linkTo="/search"
                />
            </div>
        );
    }
}