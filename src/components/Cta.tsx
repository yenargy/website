import React from 'react';
import {Button, Col, Icon, Input, Row} from 'antd';
//
import {MarketText} from '../Styles';
import telegram from '../images/telegram.svg';
import twitter from '../images/twitter.svg';
import medium from '../images/medium.svg';
import github from '../images/github.svg';


class Cta extends React.Component {
  render() {
    return (
      <section id="dapp" style={{background: '#F0F0F0', padding: '130px'}}>
        <Row type="flex" align="middle" gutter={48}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>Join our Newsletter</MarketText>
            <Input
              placeholder="Enter your email here"
              suffix={(
                <Button className="search-btn" size="large" type="primary" style={{padding: '0 10px', height: '38px'}}>
                  <Icon type="arrow-right" />
                </Button>
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>Become a Partner</MarketText>
            <Input
              placeholder="Email Us"
              suffix={(
                <Button className="search-btn" size="large" type="primary" style={{padding: '0 10px', height: '38px'}}>
                  <Icon type="arrow-right" />
                </Button>
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>Market Protocol on the web</MarketText>
            <Button size="large" type="primary" style={{marginRight: '10px'}}>
              <img alt="telegram" src={telegram}/>
            </Button>
            <Button size="large" type="primary" style={{marginRight: '10px'}} >
              <img alt="telegram" src={twitter}/>
            </Button>
            <Button size="large" type="primary" style={{marginRight: '10px'}} >
              <img alt="telegram" src={medium}/>
            </Button>
            <Button size="large" type="primary" style={{marginRight: '10px'}} >
              <img alt="telegram" src={github}/>
            </Button>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Cta;
