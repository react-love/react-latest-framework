/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*component*/

@connect(
    state => state
)
export default class BookListContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const { match } = this.props
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