import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* bring all children elements to the front */
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
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
`;

class TestPortal extends Component {
  state = {
    showPortal: false
  };

  container = document.createElement('div');

  togglePortal = () => {
    this.setState(
      prevState => ({
        showPortal: !prevState.showPortal
      }),
      () => {
        this.state.showPortal
          ? document.body.appendChild(this.container)
          : document.body.removeChild(this.container);
      }
    );
  };

  setPortal = showPortal => {
    this.setState({ showPortal }, () => {
      this.state.showPortal
        ? document.body.appendChild(this.container)
        : document.body.removeChild(this.container);
    });
  };

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const { children } = this.props;
    const { showPortal } = this.state;

    const childRenderProp = children({
      portalOpen: showPortal,
      portalClosed: !showPortal,
      togglePortal: this.togglePortal,
      setPortal: this.setPortal
    });

    return showPortal
      ? ReactDOM.createPortal(
          <Wrapper>{childRenderProp}</Wrapper>,
          this.container
        )
      : childRenderProp;
  }
}

export default TestPortal;
