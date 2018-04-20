import React from 'react';
import {withSiteData} from 'react-static';
//

import {MarketText} from '../Styles';

import Hero from "@components/Hero";
import Solution from "@components/Solution";
import Chain from "@components/Chain";
import Dapp from "@components/Dapp";
import BuildDapp from "@components/BuildDapp";
import Cta from "@components/Cta";

export default withSiteData(() => (
  <div>
    <Hero/>
    <section id="info" style={{padding: '170px'}}>
      <MarketText style={{fontSize: '25px'}}>
        <span style={{color: '#00E2C1', fontWeight: 'bold'}}>MARKET Protocol</span> has been created to provide a
        secure, flexible,
        open source foundation for decentralized trading on the Ethereum blockchain.
        We provide the pieces necessary to create a decentralized exchange,
        including the requisite clearing and collateral pool infrastructure,
        enabling third parties to build applications for trading.
      </MarketText>
    </section>
    <Solution/>
    <Chain/>
    <Dapp/>
    <BuildDapp/>
    <Cta/>
  </div>
))
