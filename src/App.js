import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import TestPortal from './components/portals/TestPortal';
import PortalRenderProp from './components/portals/PortalRenderProp';

import WalkthroughSlides from './components/portals/WalkthroughSlides';

const Button = styled.button`
  font-size: 3rem;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* _________________ left off here _____________ */}
          {/* made separate portal to test turning on in steps */}
          <PortalRenderProp>
            {({ portalOpen, portalClosed, togglePortal, setPortal }) => (
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <span onClick={togglePortal} style={{ color: 'slategray' }}>
                  X
                </span>
              </div>
            )}
          </PortalRenderProp>
          <h1 className="App-title">React Portal</h1>
        </header>
        <br />
        {/* This div emulates having pos:relative somewhere in project before the modal to ensure portal is functioning as expected*/}
        <div style={{ position: 'relative' }}>
          <PortalRenderProp>
            {({ portalOpen, portalClosed, togglePortal, setPortal }) => (
              <div>
                {portalOpen && (
                  <WalkthroughSlides togglePortal={togglePortal} />
                )}
                {portalClosed && (
                  <div>
                    <Button type="button" onClick={togglePortal}>
                      Show Portal
                    </Button>
                  </div>
                )}
              </div>
            )}
          </PortalRenderProp>
          {/* <div onClick={() => setPortal(true)}>😎</div> */}
          {/* {this.state.showPortal && (
            <TestPortal togglePortal={this.togglePortal} />
          )} */}
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
