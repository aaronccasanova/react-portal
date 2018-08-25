import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 20px;
  background: snow;
  border-radius: 4px;

  width: calc(260px + (1000 - 260) * (100vmin - 320px) / (2500 - 320));
  min-height: calc(260px + (1000 - 260) * (100vmin - 320px) / (2500 - 320));

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ul {
    list-style: none;

    li {
      font-size: calc(12px + (40 - 12) * (100vmin - 320px) / (2500 - 320));
    }
  }
`;

const Title = styled.h1`
  font-size: calc(16px + (70 - 16) * (100vmin - 320px) / (2500 - 320));
  margin-bottom: 20px;
`;

const X = styled.div`
  font-size: calc(16px + (70 - 16) * (100vmin - 320px) / (2500 - 320));
  margin-top: auto;
`;

class WalkthroughSlides extends Component {
  render() {
    const { togglePortal } = this.props;
    return (
      <Wrapper>
        <Card>
          <Title>Walkthrough Guide!</Title>
          <ul>
            <li>
              <strong>Step 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut, doloribus.
            </li>
            <li>
              <strong>Step 2:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio quia consectetur sit error libero
              eligendi.
            </li>
            <li>
              <strong>Step 3:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut, doloribus.
            </li>
          </ul>
          <X onClick={togglePortal}>X</X>
        </Card>
      </Wrapper>
    );
  }
}

export default WalkthroughSlides;
