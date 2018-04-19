import React from 'react'
import { withSiteData } from 'react-static'
import { Col, Row } from 'antd'
import styled from 'styled-components'
//
import heroIllustration from '../images/hero-illustration.png'
import asset1 from '../images/asset_1.svg'
import asset2 from '../images/asset_2.svg'
import asset3 from '../images/asset_3.svg'
import asset4 from '../images/asset_4.svg'
import asset5 from '../images/asset_5.svg'
import asset6 from '../images/asset_6.svg'


const HeroArt = styled.div`
  text-align: right;
`

const HeroText = styled.div`
  color: #F0F0F0;
  font-size: 50px;
  margin-left: 50px;
  margin-top: -50px;
`

const HeaderText = styled.h1`
  font-size: 36px;
`

const MarketInfoText = styled.div`
  font-size: 25px;
  font-weight: 300;
`

const SolutionIllustration = styled.div`
  background-color: #00E2C1;
  padding: 100px;
`

const MarketList = styled.li`
  font-size: 18px;
  padding: 10px 0;
  list-style: none;
  
  :before {
    content: "";
    line-height: 1em;
    width: 10px;
    height: 10px;
    background-color: #00E2C1;
    float: left;
    margin-top: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

export default withSiteData(() => (
  <div>
    <section id="hero" style={{ background: '#181E26', height: '735px'}}>
      <Row type="flex" className="hero" align="middle">
        <Col xs={20} sm={20} md={10} lg={10} xl={10}>
          <HeroText>Powering safe, solvent and trustless trading of any asset.</HeroText>
        </Col>
        <Col span={14}>
          <HeroArt><img alt="hero" src={heroIllustration} /></HeroArt>
        </Col>
      </Row>
    </section>
    <section id="info" style={{ padding: '170px' }}>
      <MarketInfoText>
        <span style={{ color: '#00E2C1', fontWeight: 'bold' }}>MARKET Protocol</span> has been created to provide a secure, flexible,
        open source foundation for decentralized trading on the Ethereum blockchain.
        We provide the pieces necessary to create a decentralized exchange,
        including the requisite clearing and collateral pool infrastructure,
        enabling third parties to build applications for trading.
      </MarketInfoText>
    </section>
    <section id="solution" style={{ background: '#F0F0F0', padding: '70px' }}>
      <Row type="flex" className="hero" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <SolutionIllustration>
            <img alt="exchange" src={asset1} />
          </SolutionIllustration>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ padding: '0 70px' }}>
          <HeaderText>Issues with current exchanges</HeaderText>
          <MarketList>centralized</MarketList>
          <MarketList>security, safety, and custody of funds</MarketList>
          <MarketList>hard to short or hedge crypto assets</MarketList>
          <MarketList>limited exposure to cross-chain or real world assets</MarketList>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ padding: '0 70px' }}>
          <HeaderText>How we solve these issues</HeaderText>
          <p style={{fontSize: '18px'}}>MARKET Protocol Smart Contracts decentralize accounting, custody of funds and position management.</p>
          <MarketList>Fully collateralized</MarketList>
          <MarketList>Trustless</MarketList>
          <MarketList>Real world and digital assets</MarketList>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <SolutionIllustration>
            <img alt="exchange" src={asset2} />
          </SolutionIllustration>
        </Col>
      </Row>
    </section>
  </div>
))
