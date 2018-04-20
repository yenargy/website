import React from 'react';
import {Button, Col, Row} from 'antd';
import styled from 'styled-components';
//
import {MarketText, MarketList} from '../Styles';
import Protocol from '../images/protocol_illustration.svg';

const TextWrapper = styled.div`
  padding: 0px 150px;
`;
const IllustrationWrapper = styled.div`
  background: #181E26
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px
`;

class BuildDapp extends React.Component {
  render() {
    return (
      <section id="builddapp" style={{padding: '70px'}}>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationWrapper>
              <img alt="tablet" src={Protocol} width="50%" style={{margin: '0 auto'}}/>
            </IllustrationWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketText header>Build your dApp on Market Protocol</MarketText>
              <MarketText style={{margin: '40px 0'}}>As a protocol, MARKET enables third parties to build applications for trading, order routing and related activities. The protocol is open source and available under the Apache 2.0 license.</MarketText>
              <Button type="primary" style={{width: '300px', textAlign: 'center', marginTop: '20px'}}><a href="#" target="_blank">Check us out on Github</a></Button>
              <Button type="primary" style={{width: '300px', textAlign: 'center', marginTop: '20px'}}><a href="#" target="_blank">Learn more about us</a></Button>
            </TextWrapper>
          </Col>
        </Row>
      </section>
    );
  }
}
export default BuildDapp;
