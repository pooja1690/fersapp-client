import React, {Component} from 'react';
import {RequiredDatesTemplate} from './template';
import {connect} from 'react-redux';
import {
  updateDob,
  updateServiceDate,
  updateTentativeRetirementDate,
} from '../actions';

class RequiredDatesContainer extends Component {
  static navigationOptions = {
    title: 'Step 2 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <RequiredDatesTemplate
        updateDob={e => this.props.updateDob(e)}
        updateServiceDate={e => this.props.updateServiceDate(e)}
        updateTentativeRetirementDate={e =>
          this.props.updateTentativeRetirementDate(e)
        }
        dob={this.props.scenario.dob}
        serviceDate={this.props.scenario.service_date}
        tentativeRetirementDate={this.props.scenario.tentative_retirement_date}
        onComplete={() => navigate('SpecialProvision')}
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
  updateDob,
  updateServiceDate,
  updateTentativeRetirementDate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequiredDatesContainer);
