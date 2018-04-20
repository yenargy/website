import styled from 'styled-components';

const MarketText = styled.div`
  font-size: ${props => props.header ? '36px;' : '18px;'};
  font-weight: ${props => props.header ? '500;' : '300;'};
`;


const MarketList = styled.li`
  font-size: 18px;
  padding: 10px 0;
  list-style: none;
  font-weight: 300;
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
`;

export {MarketList, MarketText};
