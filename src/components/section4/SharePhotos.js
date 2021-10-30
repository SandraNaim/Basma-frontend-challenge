import React from 'react';
import ImageBtn from '../widgets/ImageBtn';
import './SharePhotos.css';

class WorkFaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }

    render() {
        return (
            <div className="pt-5 pb-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="h1 text-start">
                        Share your photos <br/> with friends easily
                        </div>
                        <div className="pt-3">
                            <div className="row align-items-left">
                                <div className="col-2 mb-2">
                                    <ImageBtn image="layers"/>
                                </div>
                                <div className="col-10 text-start">
                                    Combined with a handful of model sentence structures look reasonable
                                </div>
                                <div className="col-2 mb-2">
                                    <ImageBtn image="empty-file"/>
                                </div>
                                <div className="col-10 text-start">
                                    Contrary to popular belief, Lorem ipsum is not simple random text
                                </div>
                                <div className="col-2 mb-2">
                                    <ImageBtn image="drop"/>
                                </div>
                                <div className="col-10 text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                                </div>
                                <div className="col-2 mb-2">
                                    <ImageBtn image="cart"/>
                                </div>
                                <div className="col-10 text-start">
                                    Combined with a handful of model sentence structures look reasonable
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 text-start">
                            <button type="button" className="btn btn-primary btn-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-5 thumb-two">
                        <img src='/images/png/thumb-2.png' alt="thumb-2" style={{marginLeft:"auto", objectFit:"scale-down", height:"420px"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkFaster;
