import React from 'react';

class Subscribe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="row align-items-center justify-content-center mt-5 mb-5">
                    <div className="col-md-6">
                        <div className="h2" >Subscribe to get updates</div>
                        <div className="mt-3">By subscribing you will get newsletter, Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <label className="form-label mt-3" style={{fontSize:"12px"}}>Enter your email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <button className="bt btn-primary mt-1 btn-block" style={{width:"100%"}}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe;
