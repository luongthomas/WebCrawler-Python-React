import React from 'react'
import MainContainer from './MainContainer'
import Navbar  from './Navbar/Navbar'

const Main = React.createClass({
  render () {
    return (
      <MainContainer>
        <Navbar />

        <div>
          <span><h1>{`Web Crawler`}</h1></span>
        </div>

        {this.props.children}

      </MainContainer>
    );
  },
});

export default Main
