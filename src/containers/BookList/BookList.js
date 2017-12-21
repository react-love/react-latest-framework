/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

export default class BookList extends React.Component {
    render() {
        //const { match } = this.props
        return(
            <div className="">
                bookList
            </div>
        );
    }
}

BookList.propTypes = {
    match: PropTypes.object
}