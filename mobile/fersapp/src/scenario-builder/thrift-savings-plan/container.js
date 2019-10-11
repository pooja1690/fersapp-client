import React, {Component} from 'react';
import {TSPTemplate} from './template';
import {connect} from 'react-redux';
import {updateTspDisbursement} from '../actions';

class TSPContainer extends Component {
  static navigationOptions = {
    title: 'Step 7 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <TSPTemplate
        updateTspDisbursement={e => this.props.updateTspDisbursement(e)}
        monthlyTspDisbursement={this.props.scenario.monthly_tsp_disbursement}
        onComplete={() => navigate('AnnualUnusedLeave')}
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
  updateTspDisbursement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TSPContainer);
