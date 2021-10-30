import React from 'react';
import './CreativeWay.css';
import { withTranslation } from 'react-i18next';

class CreativeWay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          }
        }


    render() {
      const { t } = this.props;
      // document.body.dir = i18n.dir();
        return (

          <div className="row align-items-center">
              <div className="col">
                <div className="h1">
                  {t('creativeWay')}
                </div>
                <div className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                </div>
              </div>
              <div className="col mt-5">
                <img src='images/png/thumb-1.png' alt="thumb-1" className="thumb-one"/>
              </div>
            </div>

        )
    }
}
export default withTranslation()(CreativeWay);