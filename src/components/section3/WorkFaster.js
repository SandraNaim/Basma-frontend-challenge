import React from 'react';
import ImageBtn from '../widgets/ImageBtn';

class WorkFaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }

    render() {
        return (
            <div className="mt-5 App-padding">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src='/images/png/thumb-3.png' alt="thumb-3" style={{marginLeft:"auto", objectFit:"scale-down", height:"420px"}}/>
                    </div>
                    <div className="col-md-6" style={{textAlign:"left"}}>
                        <div className="h1">
                        Work Faster with Powerful ToolS
                        </div>
                        <div className="pt-3">
                            <div>
                                <span>
                                    <img src='/images/svg/check.svg' alt="check" style={{height:"15px", margin:"5px"}}/>
                                </span>
                                <span>
                                    Combined with a handful of model sentence structures look reasonable
                                </span>
                            </div>
                            <div>
                                <span>
                                    <img src='/images/svg/check.svg' alt="check" style={{height:"15px", margin:"5px"}}/>
                                </span>
                                <span>
                                    Contrary to popular belief, Lorem ipsum is not simple random text
                                </span>
                            </div>
                            <div>
                                <span>
                                    <img src='/images/svg/check.svg' alt="check" style={{height:"15px", margin:"5px"}}/>
                                </span>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                                </span>
                            </div>
                            <div>
                                <span>
                                    <img src='/images/svg/check.svg' alt="check" style={{height:"15px", margin:"5px"}}/>
                                </span>
                                <span>
                                    Combined with a handful of model sentence structures look reasonable
                                </span>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <ImageBtn image="alarm"/>
                                </div>
                                <div className="col-2">
                                    <ImageBtn image="form-mail"/>
                                </div>
                                <div className="col-2">
                                    <ImageBtn image="video"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkFaster;
