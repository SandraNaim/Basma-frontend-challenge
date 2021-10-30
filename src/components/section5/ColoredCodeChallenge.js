import React from 'react';
import FullFunctional from '../widgets/FullFuctional';
import './ColoredCodeChallenge.css';

class ColoredCodeChallenge extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }

    render() {
        return (
            <div className="App-padding">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="h2">
                        Code Challenge
                        </div>
                        <div className="pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-3">
                        <FullFunctional title="Install App" image="download" type="png"/>
                    </div>
                    <div className="col-md-1">
                        <img src='images/svg/chevron-right.svg' alt="chevron-right" className="chevron-visibility"/>
                    </div>
                    <div className="col-md-3">
                        <FullFunctional title="Setup your profile" image="settings" type="png"/>
                    </div>
                    <div className="col-md-1">
                        <img src='images/svg/chevron-right.svg' alt="chevron-right" className="chevron-visibility"/>
                    </div>
                    <div className="col-md-3">
                        <FullFunctional title="Enjoy your features!" image="app" type="png"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default ColoredCodeChallenge;
