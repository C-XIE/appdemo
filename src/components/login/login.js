import React from 'react'

import { Page, List, ListInput, ListButton, Link } from 'framework7-react';
export default class Login extends React.PureComponent {
    state = {
        username: '',
        password: '',
    }
    signIn = () => {
        this.$f7router.navigate('/')
    }
    render() {
        return <Page>
            <div style={{ fontSize: "30px", textAlign: "center", padding: "40px 0 10px 0" }} >交流平台登陆</div>
            <List inset>
                <ListInput
                    type="text"
                    placeholder="用户名"
                    value={this.state.username}
                    onInput={(e) => {
                        this.setState({ username: e.target.value });
                    }}
                />
                <ListInput
                    type="password"
                    placeholder="密码"
                    value={this.state.password}
                    onInput={(e) => {
                        this.setState({ password: e.target.value });
                    }}
                />
            </List>
            <List inset>
                <ListButton onClick={this.signIn}>登录</ListButton>
            </List>
            <div style={{ display: "flex", justifyContent: "center" }} >
                <Link style={{fontSize:"12px",color:"#968a8a"}}  back>随便看看</Link>
            </div>
        </Page>
    }
}