/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*actions*/
import * as navActions from 'actions/nav';

/*component*/
import { Header } from 'components/Home/header';
import { Nav } from 'components/Home/nav';
import { Special } from 'components/Home/Special';

const meta = {
    title: 'redux',
    meta: {
        charset: 'utf-8',
        description: 'redux-react实战模板',
        name: {
            keywords: 'redux, react, webpack',
        },
    },
};

@connect(
    state => state,
    dispatch => bindActionCreators(navActions, dispatch)
)
export class HomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.nav) {
            this.props.receiveNav();
         }
    }

    componentDidMount() {
        console.log("渲染完成打印");
    }

    render() {

        return(
            <div>
                <DocumentMeta {...meta} />
                <Header />
                <Nav
                    navList={this.props.nav}
                />
                <Special />
            </div>
        );
    }
}