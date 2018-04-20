import React from 'react';
import {Button, Col, Row} from 'antd';
import styled from 'styled-components';
//
import {MarketText, MarketList} from '../Styles';
import asset3 from '../images/asset_3.svg';
import asset9 from '../images/asset_9.svg';
import asset5 from '../images/asset_5.svg';
import tablet from '../images/tablet.svg';

const Wrapper = styled.div`
  background-color: #00E2C1;
  padding: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 420px;
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  padding: 0px 100px 0px 50px;
`;


class Dapp extends React.Component {
  render() {
    return (
      <section id="dapp" style={{background: '#F0F0F0', padding: '70px'}}>
        <MarketText header style={{marginBottom: '70px'}}>Easily create new contracts</MarketText>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <img alt="baseToken" src={asset3}/>
              <MarketText header style={{fontSize: '18px'}}>Base Token</MarketText>
              <MarketText>What ERC20 token is used for collateral?</MarketText>
            </Wrapper>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <img alt="baseToken" src={asset9}/>
              <MarketText header style={{fontSize: '18px'}}>Oracle Solution</MarketText>
              <MarketText>Who provides the external data for trade settlement?</MarketText>
            </Wrapper>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <img alt="baseToken" src={asset5}/>
              <MarketText header style={{fontSize: '18px'}}>Reference Asset</MarketText>
              <MarketText>What is the underlying asset?</MarketText>
            </Wrapper>
          </Col>
        </Row>
        <Row type="flex" align="middle" style={{marginTop: '90px'}}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketList>Users can create contracts with MARKET Protocol’s dApp guiding them through the process</MarketList>
              <MarketList>A contract defines the ERC20 token used as collateral, the oracle and the reference asset.</MarketList>
              <MarketList>Once created, MARKET Protocol contracts are deployed to the blockchain allowing trustless, many to many trading</MarketList>
              <MarketList>Exiting a position is as easy as trading with another user or holding the contract until expiration</MarketList>
              <Button type="primary" style={{padding: '0 50px', marginTop: '20px'}}><a href="https://dapp.marketprotocol.io" target="_blank">Try out our Demo App</a></Button>
            </TextWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img alt="tablet" src={tablet} width="100%"/>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Dapp;
