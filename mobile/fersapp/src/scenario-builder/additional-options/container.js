import React, {Component} from 'react';
import {AdditionalOptionsTemplate} from './template';
import {connect} from 'react-redux';
import {
  updateSurvivorBenefitDeductions,
  updateSurvivorBenefitOption,
} from '../actions';

class AdditionalOptionsContainer extends Component {
  static navigationOptions = {
    title: 'Step 10 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <AdditionalOptionsTemplate
        updateSurvivorBenefitDeductions={e =>
          this.props.updateSurvivorBenefitDeductions(e)
        }
        updateSurvivorBenefitOption={e =>
          this.props.updateSurvivorBenefitOption(e)
        }
        survivorBenefitDeductions={
          this.props.scenario.survivor_benefit_deductions
        }
        survivorBenefitOption={this.props.scenario.survivor_benefit_option}
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
  updateSurvivorBenefitDeductions,
  updateSurvivorBenefitOption,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdditionalOptionsContainer);
