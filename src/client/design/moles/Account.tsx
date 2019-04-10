import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { appendSearchParamsToUrl } from 'utils/utils';
import { media } from 'design/utils';
import { breakpoints } from 'design/constants';
import { useStore } from 'store/store';

const Container = styled.div`
  padding: 10px 24px 12px 24px;
  cursor: pointer;
  font-size: 15px;
  grid-gap: 0 12px;
  display: grid;
  grid-template-columns: max-content auto;
  white-space: normal;
  align-items: center;
  position: relative;

  &:hover {
    background: #fafafa;
  }

  &:after {
    left: 24px;
    right: 24px;
    content: '';
    border-bottom: 1px solid #dadce0;
    position: absolute;
    bottom: 0;
    height: 0;
  }

  ${media.lessThan(breakpoints.SMALL)`
    padding-left: 0px;
    padding-right: 0px;
  `}
`;

const Identicon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 999rem;
  line-height: 28px;
  text-align: center;
  background: black;
  color: white;
  font-size: 14px;
  font-family: menlo, consolas, monospace;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.25;
  color: #111;
`;

const Network = styled.div`
  font-size: 13px;
  line-height: 1;
  color: #596168;
  font-family: menlo, monaco, consolas, 'Courier New', Courier, monospace;
`;

const getHashCode = (str) => {
  var hash = 0;
  if (str.length == 0) return hash;
  for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

const intToHSL = (int) => {
  var shortened = int % 360;
  return "hsl(" + shortened + ",100%,30%)";
}

const Account = ({ identifier }) => {
  const { state: { config: { network } } } = useStore();
  const initial = identifier.slice(0, 1);

  const handleClick = () => {
    const to = appendSearchParamsToUrl('/signin/password');
    navigate(to, {
      state: { username: identifier },
    });
  }

  const bg = intToHSL(getHashCode(identifier));

  const { name } = network;

  return (
    <Container onClick={handleClick}>
      <Identicon
        style={{
          backgroundColor: bg,
        }}
      >
        {initial}
      </Identicon>
      <div>
        <Name>
          {identifier}
        </Name>
        <Network>
          {name}
        </Network>
      </div>
    </Container>
  )
}

export default Account;