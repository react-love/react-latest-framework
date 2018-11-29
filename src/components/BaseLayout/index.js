import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import UserList from 'components/UserList'
import './index.less'

const { Header, Sider, Content } = Layout

class BaseLayout extends React.Component {
  state = {}
  render () {
    const { routes = [], location } = this.props
    console.log(location.pathname)
    return (
      <Layout className="base-layout">
        <Sider>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname] }>
            <Menu.Item key="/admin/home">
              <NavLink to="/admin/home">
                <Icon type="user"/>
                首页
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/search">
              <NavLink to="/admin/search">
                <Icon type="video-camera"/>
                搜索页
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/login">
              <NavLink to="/admin/login">
                <Icon type="upload"/>
                登录页
              </NavLink>
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
                  {
                    routes.map((r, key) => {
                      return (
                        <Route
                          component={r.component}
                          exact={!!r.exact}
                          key={r.path + key}
                          path={r.path}
                        />
                      )
                    })
                  }
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