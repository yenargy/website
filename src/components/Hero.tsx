import React from 'react';
import {Col, Row} from 'antd';
import styled from 'styled-components';
//
import heroIllustration from '../images/hero-illustration.png';

const HeroArt = styled.div`
  text-align: right;
`;

const HeroText = styled.div`
  color: #F0F0F0;
  font-size: 50px;
  margin-left: 50px;
  margin-top: -50px;
`

class Hero extends React.Component {
  render() {
    return (
      <section id="hero" style={{background: '#181E26', height: '735px'}}>
        <Row type="flex" className="hero" align="middle">
          <Col xs={20} sm={20} md={10} lg={10} xl={10}>
            <HeroText>Powering safe, solvent and trustless trading of any asset.</HeroText>
          </Col>
          <Col span={14}>
            <HeroArt><img alt="hero" src={heroIllustration}/></HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Hero;
