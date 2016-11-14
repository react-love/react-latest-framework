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
                <Header />
                <Nav
                    navList={this.props.nav}
                />
                <Special />
            </div>
        );
    }
}