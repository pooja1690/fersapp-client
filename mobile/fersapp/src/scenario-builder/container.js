import React, {Component} from 'react';
import {ScenarioBuilder} from './main';

class ScenarioBuilderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {showTermsModal: false};
  }
  static navigationOptions = {
    title: 'Step 1 of 10',
  };

  renderTermsModal = () => {
    this.setState({
      showTermsModal: true,
    });
  };

  closeTermsModal = () => {
    this.setState({
      showTermsModal: false,
    });
  }
  render() {
    return (
      <ScenarioBuilder
        renderTermsModal={() => this.renderTermsModal()}
        showTermsModal={this.state.showTermsModal}
        closeTermsModal={() => this.closeTermsModal()}
      />
    );
  }
}

export default ScenarioBuilderContainer;
