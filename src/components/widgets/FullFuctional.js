import React from 'react';

class FullFunctional extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageSrc:'',
          }
        }

        async componentDidMount() {
            this.timerID = setInterval(
              () => this.showIcon(),
              1000
            );
        }
        showIcon() {
            if(this.props.type === 'svg'){
                this.setState({
                    imageSrc: 'images/svg/'+this.props.image+'.svg'
                });
            } else if(this.props.type === 'png'){
                this.setState({
                    imageSrc: 'images/png/'+this.props.image+'.png'
                });
            }
          }

    render() {
        return (
            <div>
                <img src={this.state.imageSrc} alt={this.props.image} height="52px" width="52px"/>

                <div className="h4 mt-2" style={{position:"relative"}}>
                {this.props.title}
                </div>
                <div className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        )
    }
}
export default FullFunctional;
