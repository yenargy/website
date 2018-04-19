import React from 'react'
import {Link, Router, withRouter} from 'react-static'
import styled, {injectGlobal} from 'styled-components'
import {hot} from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import {Layout, Menu, Icon} from 'antd'
import {Link} from "react-router-dom";
import logoImg from 'images/logo_light.svg'
import marketFooter from '@components/footer';
const {Header, Content, Footer} = Layout

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`

const Logo = styled.div`
  width: 250px;
  line-height: 64px;
  margin: 0;
  float: left;
`

const Trigger = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 16px;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: #108ee9;
  }
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Logo><img alt="react-static" width="100%" src={logoImg}/></Logo>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px', float: 'right'}}
            >
              <Menu.Item key="1">
                <Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}>
                  Team
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  Whitepaper
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  FAQs
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  Subscribe
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  Blog
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  Telegram
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{background: '#FFFFFF'}}>
            <Routes />
          </Content>
          {marketFooter}
        </Layout>
      </Router>
    )
  }
}

export default hot(module)(App)
