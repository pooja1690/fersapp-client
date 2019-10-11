import React, {Component} from 'react';
import {SalaryInfoTemplate} from './template';
import {connect} from 'react-redux';
import {
  updateEstimatedRetirementHigh,
  updateEstimatedRetirementSalary,
} from '../actions';

class SalaryInfoContainer extends Component {
  static navigationOptions = {
    title: 'Step 5 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SalaryInfoTemplate
        updateEstimatedRetirementSalary={e =>
          this.props.updateEstimatedRetirementSalary(e)
        }
        updateEstimatedRetirementHigh={e =>
          this.props.updateEstimatedRetirementHigh(e)
        }
        estimatedRetirementSalary={
          this.props.scenario.estimated_retirement_salary
        }
        estimatedRetirementHigh={
          this.props.scenario.estimated_retirement_3yr_avg_high
        }
        onComplete={() => navigate('SocialSecBenefit')}
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
  updateEstimatedRetirementHigh,
  updateEstimatedRetirementSalary,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalaryInfoContainer);
