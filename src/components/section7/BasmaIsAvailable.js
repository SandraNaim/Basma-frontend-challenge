import React from 'react';
import './BasmaIsAvailable.css'

class BasmaChallenge extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="position-relative pt-5 pb-5">
                <div className="full" style={{backgroundImage:`url("images/download-bg.jpeg")`}}></div>
                <div className="overlay-div"></div>
                <div className="row align-items-center justify-content-center overlay-txt">
                    <div className="col-md-6">
                        <div className="h2" >BASMA is available for all devices</div>
                        <div className="mt-3">App is available for all devices,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="row align-items-center justify-content-center mt-4">
                            <div className="col-6 text-end">
                                <img src='images/png/app-store.png' alt="app-store" height="50px"/>
                            </div>
                            <div className="col-6 text-start">
                                <img src='images/png/google-play.png' alt="google-play" height="50px"/>
                            </div>
                        </div>
                        <div className="mt-3">*Available on iPhone,iPad and all Android devices</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BasmaChallenge;
