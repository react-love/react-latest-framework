import React, { useEffect, useContext, useCallback, useState } from 'react'
import { useDispatch, useMappedState, StoreContext } from 'redux-react-hook'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd'
import './login.less'
import { setGlobalLoading, checkIsLogin } from 'actions/global'

const FormItem = Form.Item

function Login(props) {
    const dispatch = useDispatch()
    const { getFieldDecorator } = props.form

    const allowLogin = (obj) => {
        const { userName = '', password = '' } = obj
        if (userName === 'admin' && password === '12345') {
            return true
        } else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
                const isAllow = allowLogin({ userName: values.userName, password: values.password })
                if (isAllow) {
                    message.success('登录成功，正在跳转中~')
                        .then(() => {
                            dispatch(checkIsLogin(true))
                            setTimeout(() => {
                                props.history.push('/admin')
                            }, 500)
                        })
                } else {
                    message.error('账号或密码不正确~')
                }
            }
        })
    }

    useEffect(() => {
        dispatch(setGlobalLoading(true))
    }, [dispatch])

    return (
        <div className="page-login">
            <Card style={{ width: 350 }} className="card-login">
                <Form onSubmit={handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                   placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}

export default Form.create()(Login)
