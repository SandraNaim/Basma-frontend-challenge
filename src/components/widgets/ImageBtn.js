import React from 'react';
import '../widgets/ImageBtn.css';

class ImageBtn extends React.Component {

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
            this.setState({
                imageSrc: 'images/svg/'+this.props.image+'.svg'
            });
          }

    render() {
        return (
            <div>
                <button className="btn btn-default btn-box">
                    <img  src={this.state.imageSrc} alt={this.props.image} width="20" />
                </button>
            </div>
        )
    }
}
export default ImageBtn;
