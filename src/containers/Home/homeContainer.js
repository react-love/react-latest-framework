/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*actions*/
import * as navActions from 'actions/nav';

/*component*/
import { Header } from 'components/Home/header';
import { Nav } from 'components/Home/nav';
import { Special } from 'components/Home/Special';

/*files*/
const search = require('./files/search.svg');

@connect(
    state => state,
    dispatch => bindActionCreators(navActions, dispatch)
)
export class HomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.nav.navMain.length === 0) {
            this.props.getNav();
        }
    }

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <Header
                    title="高校二手书城"
                    imgUrl={search}
                    linkTo="/search"
                />
                <Nav
                    navList={this.props.nav}
                />
                <Special />
            </div>
        );
    }
}