import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* ---------For Editing Layout---------- */
  border: 2px solid blue;
  /* ------------------------------------- */

  h1 {
    color: white;
    font-size: 50px;
  }

  & > * {
    position: relative;
    z-index: 100;
  }

  /* fixed overlay */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    z-index: 99;
  }
`;

class TestPortal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const { togglePortal, children } = this.props;
    return ReactDOM.createPortal(
      <Wrapper>
        <h1 onClick={togglePortal}>HORSE!!</h1>
      </Wrapper>,
      this.container
    );
  }
}

export default TestPortal;
