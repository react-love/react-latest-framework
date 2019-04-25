import React, { useEffect, useContext, useCallback, useState } from 'react'
import { useDispatch, useMappedState, StoreContext } from 'redux-react-hook'
import { NavLink, Route } from 'react-router-dom'
import { formatFirstMenu, formatSecondMenu } from 'utils/tool'
import { Layout, Menu, Icon, Row, Col, Avatar } from 'antd'
import './index.less'
import { setGlobalLoading, checkIsLogin } from 'actions/global'
import userData from './user-data'
import routes from 'routes'

const SubMenu = Menu.SubMenu
const { Header, Sider, Content } = Layout

export default function BaseLayout(props) {
    const store = useContext(StoreContext)
    const { isLogin } = store.getState().toJS().global
    const dispatch = useDispatch()

    const pathname = props.location.pathname
    // 初始化state
    const initalState = {
        currentMenu: formatSecondMenu(pathname),
        menuData: {
            theme: 'dark', // 菜单主题色
            defaultSelectedKeys: pathname, // 当前默认值
            mode: 'inline', // 菜单模式
            defaultOpenKeys: formatFirstMenu(pathname),
            list: userData
        }
    }
    const [state, setState] = useState(initalState)
    const { menuData, currentMenu } = state
    const { history } = props

    const getCurrentMenu = (item) => {
        setState(() => ({
            ...state,
            currentMenu: formatSecondMenu(item)
        }))
    }

    const redirectRoute = useCallback(() => {
        if (isLogin) {
            history.push(pathname)
        } else {
            history.push('/login')
        }
    }, [isLogin, history, pathname])

    const onLogout = () => {
        dispatch(checkIsLogin(false))
    }

    useEffect(() => {
        console.log(1)
        redirectRoute()
        dispatch(setGlobalLoading(true))
    }, [dispatch, redirectRoute])

    return (
        <Layout className="base-layout">
            <Sider>
                <Menu
                    theme={menuData.theme}
                    mode={menuData.mode}
                    defaultOpenKeys={[menuData.defaultOpenKeys]}
                    defaultSelectedKeys={[menuData.defaultSelectedKeys]}
                >
                    {
                        menuData.list.map((item) => {
                            return (
                                <SubMenu key={item.id}
                                         title={<span><Icon type={item.icon}/><span>{item.value}</span></span>}>
                                    {
                                        item.subtitle.map(second => {
                                            return (
                                                <Menu.Item
                                                    key={second.link}
                                                    onClick={getCurrentMenu}
                                                >
                                                    <NavLink to={second.link}>
                                                        {second.value}
                                                    </NavLink>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout>
                <Row gutter={12}>
                    <Col span={24}>

                        <Layout>
                            <Header className="base-header">
                                <span className="header-tag">{currentMenu && `算法 /`} {currentMenu}</span>
                                <NavLink to="/login" onClick={onLogout}><Avatar size="large"
                                                                                icon="user"/></NavLink>
                            </Header>
                            <Content className="base-content">
                                {
                                    // routes.map((r, key) => {
                                    //     return (
                                    //         <Route
                                    //             component={r.component}
                                    //             exact={!!r.exact}
                                    //             key={r.path + key}
                                    //             path={r.path}
                                    //         />
                                    //     )
                                    // })
                                }
                            </Content>
                        </Layout>
                    </Col>

                </Row>
            </Layout>
        </Layout>
    )
}
