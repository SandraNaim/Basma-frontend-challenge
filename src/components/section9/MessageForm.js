import React from 'react';

class MessageForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <input type="name" placeholder="Name" className="form-control" id="name" aria-describedby="name" />
                    <input type="email" placeholder="Email" className="form-control mt-2" id="email" aria-describedby="email" />
                    <input type="name" placeholder="Subject" className="form-control mt-2" id="subject" aria-describedby="subject" />
                    <textarea className="form-control mt-2" id="message" placeholder="Message" rows="3"></textarea>
                    <button className="bt btn-primary mt-1 btn-block mt-3" style={{width:"100%"}}>
                        Send Message
                    </button>
                </div>
            </div>
        )
    }
}

export default MessageForm;
