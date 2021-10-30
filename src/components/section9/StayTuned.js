import React from 'react';
import ImageBtn from '../widgets/ImageBtn';
import MessageForm from './MessageForm';


class StayTuned extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }

    render() {
        return (
            <div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="h2" style={{position:"relative"}}>
                        Stay Tuned
                        </div>
                        <div style={{height:"2px", width:"60px", backgroundColor:"red", margin:"auto", }}></div>
                        <div className="pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5 pl-5 pr-5">
                    <div className="col-md-6">
                        <div>Contrary to popular belief, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                        <div className="row align-items-left mt-3">
                                <div className="col-2 mb-2">
                                    <ImageBtn image="alarm"/>
                                </div>
                                <div className="col-10 text-start">
                                    Combined with a handful of model sentence structures look reasonable
                                </div>
                                <div className="col-2 mb-2">
                                    <ImageBtn image="alarm"/>
                                </div>
                                <div className="col-10 text-start">
                                    Contrary to popular belief, Lorem ipsum is not simple random text
                                </div>
                                <div className="col-2 mb-2">
                                    <ImageBtn image="alarm"/>
                                </div>
                                <div className="col-10 text-start">
                                    Contrary to popular belief, Lorem ipsum is not simple random text
                                </div>
                            </div>
                    </div>
                    <div className="col-md-6 pt-5 pb-5">
                        <MessageForm />
                    </div>
                </div>
            </div>

        )
    }
}

export default StayTuned;
