import React from 'react';
import FullFunctional from '../widgets/FullFuctional';


class CreativeWay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }

    render() {
        return (
            <div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 mt-5">
                        <div className="h2">
                        Code Challenge
                        </div>
                        <div className="colored-dash"></div>
                        <div className="pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-4">
                        <FullFunctional title="Fully Functional" image="pointer-top" type="svg" />
                    </div>
                    <div className="col-md-4">
                        <FullFunctional title="Fully Functional" image="target" type="svg" />
                    </div>
                    <div className="col-md-4">
                        <FullFunctional title="Fully Functional" image="briefcase" type="svg" />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-4">
                        <FullFunctional title="Location Tracking" image="map-marker" type="svg" />
                    </div>
                    <div className="col-md-4">
                        <FullFunctional title="Powerful Settings" image="cogs" type="svg" />
                    </div>
                    <div className="col-md-4">
                        <FullFunctional title="Multiple Language" image="world" type="svg" />
                    </div>
                </div>
            </div>

        )
    }
}

export default CreativeWay;
