import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
`;

const X = styled.div`
  color: white;
  font-size: 50px;
`;

class WalkthroughSlides extends Component {
  render() {
    const { togglePortal } = this.props;
    return (
      <Wrapper>
        <Title>Walkthrough Guide!</Title>
        <X onClick={togglePortal}>X</X>
      </Wrapper>
    );
  }
}

export default WalkthroughSlides;
