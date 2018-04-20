import React from 'react';
import {Col, Layout, Row} from 'antd';
import styled from 'styled-components';
import logoImg from 'images/logo_light.svg';
import {Link} from 'react-static';
//
const {Footer} = Layout;

const AboutMarketText = styled.div`
  margin-top: 35px;
  font-size: 12px
  padding-right: 100px;
`;

const HeaderText = styled.h2`
  color: #fff;
  font-size: 14px;
`;

const FooterLink = styled.div`
  margin: 22px 0;
  font-weight: 100;
`;

class MarketFooter extends React.Component {
  render() {
    return (
      <Footer style={{color: '#fff', height: '460px', padding: '70px 130px'}}>
        <Row type="flex" className="hero" align="top">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: '100px'}}>
            <img alt="hero" src={logoImg}/>
            <AboutMarketText>
              MARKET Protocol provides the open source building blocks powering decentralized
              derivatives trading and exchanges on the Ethereum blockchain.
              <span style={{marginTop: '35px', display: 'block'}}>©2018 Market Protocol, LLC</span>
            </AboutMarketText>
          </Col>
          <Col xs={8} sm={8} md={4} lg={4} xl={4}>
            <HeaderText>Documentation</HeaderText>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Product Brief
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Whitepaper
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Github
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                FAQ Later
              </Link>
            </FooterLink>
          </Col>
          <Col xs={8} sm={8} md={4} lg={4} xl={4}>
            <HeaderText>Community</HeaderText>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Slack
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Twitter
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Facebook
              </Link>
            </FooterLink>
          </Col>
          <Col xs={8} sm={8} md={4} lg={4} xl={4}>
            Organization
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                About
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Address
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Phone
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                Email
              </Link>
            </FooterLink>
          </Col>
        </Row>
      </Footer>
    )
  }
}

export default MarketFooter;
