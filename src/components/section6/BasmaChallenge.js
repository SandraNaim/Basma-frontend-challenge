import React from 'react';
import SignUp from '../widgets/SignUp';

class BasmaChallenge extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="pt-5 pb-5" style={{backgroundColor:"lightblue"}}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="h2" style={{position:"relative"}}>
                        Basma Code Challenge
                        </div>
                        <div style={{ height:"2px", width:"60px", backgroundColor:"red", margin:"auto",  }}></div>
                        <div className="pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-4">
                        <SignUp cardTitle="BASIC" price="$49" image="car-alt" />
                    </div>
                    <div className="col-md-4">
                        <SignUp cardTitle="PRO" price="$129" image="car" />
                    </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div>Not sure what to choose? <a href="https://basma.com/en">Contact Us</a></div>
                </div>
                </div>
            </div>

        )
    }
}

export default BasmaChallenge;
