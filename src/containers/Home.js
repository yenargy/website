import React from 'react'
import { withSiteData } from 'react-static'
import { Col, Row } from 'antd'
import styled from 'styled-components'
//
import heroIllustration from '../images/hero-illustration.png'

const HeroArt = styled.div`
  text-align: right;
`

const HeroText = styled.div`
  color: #F0F0F0;
  font-size: 50px;
  margin-left: 50px;
  margin-top: -50px;
`

const MarketInfoText = styled.div`
  font-size: 25px;
  font-weight: 300;
`

export default withSiteData(() => (
  <div>
    <section id="hero" style={{ background: '#181E26', height: '735px'}}>
      <Row type="flex" className="hero" align="middle">
        <Col xs={20} sm={20} md={10} lg={10} xl={10}>
          <HeroText>Powering safe, solvent & trustless trading of any asset.</HeroText>
        </Col>
        <Col span={14}>
          <HeroArt><img alt="hero" src={heroIllustration} className="hero-illustration" /></HeroArt>
        </Col>
      </Row>
    </section>
    <section id="info" style={{padding: '170px'}}>
      <MarketInfoText>
        <span style={{ color: '#00E2C1', fontWeight: 'bold' }}>MARKET Protocol</span> has been created to provide a secure, flexible,
        open source foundation for decentralized trading on the Ethereum blockchain.
        We provide the pieces necessary to create a decentralized exchange,
        including the requisite clearing and collateral pool infrastructure,
        enabling third parties to build applications for trading.
      </MarketInfoText>
    </section>
  </div>
))
