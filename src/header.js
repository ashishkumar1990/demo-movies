import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="Nav">
                <div className="App-header">
                    <h2>DEMO Streaming</h2>
                </div>
                <div>
            <span className="logIn">
             Log In
              <input  type="submit" className="trialButton" value="Start your free trial" />
            </span>
                </div>
            </div>
            <div className="SecondaryNav">
                <div className="SecondaryNav-header">
                    <h3>Popular Titles</h3>
                </div>
            </div>
        </div>
    );
};

export default Header
