import React from 'react'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import UserList from 'components/UserList'
import './index.less'

const { Header, Sider, Content } = Layout

class BaseLayout extends React.Component {
  state = {}
  render () {
    return (
      <Layout className="base-layout">
        <Sider
          trigger={ null }
          defaultCollapsed={true}
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Row gutter={ 12 }>
            <Col span={ 6 }>
              <UserList/>
            </Col>
            <Col span={ 18 }>
      
              <Layout>
                <Header className="base-header">
                </Header>
                <Content className="base-content">
                  { this.props.children }
                </Content>
              </Layout>
            </Col>
  
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout