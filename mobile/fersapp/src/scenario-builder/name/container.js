import React, {Component} from 'react';
import {ScenarioBuilder} from './template';
import {connect} from 'react-redux';
import {updateScenarioName} from '../actions';

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
  };

  updateName = name => {
    this.props.updateScenarioName(name);
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScenarioBuilder
        renderTermsModal={() => this.renderTermsModal()}
        showTermsModal={this.state.showTermsModal}
        closeTermsModal={() => this.closeTermsModal()}
        name={this.props.scenario.name}
        updateName={e => this.updateName(e)}
        onComplete={() => navigate('RequiredDates')}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    scenario: state.scenario,
  };
};

const mapDispatchToProps = {
  updateScenarioName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScenarioBuilderContainer);
