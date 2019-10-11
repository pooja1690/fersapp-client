import React, {Component} from 'react';
import {SocialSecurityBenefitTemplate} from './template';
import {connect} from 'react-redux';
import {updateSocialSecBenefit} from '../actions';

class SocialSecurityBenefitContainer extends Component {
  static navigationOptions = {
    title: 'Step 6 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SocialSecurityBenefitTemplate
        updateSocialSecBenefit={e => this.props.updateSocialSecBenefit(e)}
        estimatedSSB={this.props.scenario.estimated_monthly_ssb}
        onComplete={() => navigate('ThriftSavingsPlan')}
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
  updateSocialSecBenefit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialSecurityBenefitContainer);
