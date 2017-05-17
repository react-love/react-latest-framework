/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'
import PropTypes from 'prop-types';

/*actions*/
import * as navActions from 'actions/nav';
import * as bookActions from 'actions/book'

/*component*/

@connect(
    state => state,
    dispatch => bindActionCreators({...navActions, ...bookActions}, dispatch)
)
export default class BookListContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const { match } = this.props
        console.log('bookList: ', this.props)
        return(
            <div className="">
                bookList
            </div>
        );
    }
}

BookListContainer.propTypes = {
    match: PropTypes.object
}