import React from 'react';
import '../widgets/ImageBtn.css';

class SignUp extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            imageSrc: '',
            items:[
                {title: '5GB Linux Web Space'}, 
                {title: '5 MySQL Databases'},
                {title: '24/7 Tech Support'},
                {title: 'Daily Backups'}
            ]
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.timerID = setInterval(
            () => this.showIcon(),
            1000
        );
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    showIcon() {
        this.setState({
            imageSrc: 'images/svg/'+this.props.image+'.svg'
        });
    }

    render() {
        return (
            <div className="card btn-box " style={{ padding:"10px", margin:"10%"}}>
              <img src={this.state.imageSrc} alt={this.props.image} className="card-img-top" width="52px" height="52px"/>
              <div className="card-body">
                <h6 className="card-title"style={{fontWeight:"bold"}}>{this.props.cardTitle}</h6>
                <h4 className="card-text" style={{color:"purple"}}>{this.props.price}</h4>
              </div>
              <ul className="list-group list-group-flush">
                    {this.state.items.map((item, index) => {
                        return(
                        <li className="list-group-item" key={index}>{item.title}</li>
                    );})}
              </ul>
            </div>
        )
    }
}

export default SignUp;