import React, {Component} from 'react';
import {AnnualUnusedLeaveTemplate} from './template';
import {connect} from 'react-redux';
import {updateAnnualUnusedLeave, updateAnnualSickUnusedLeave} from '../actions';

class AnnualUnusedLeaveContainer extends Component {
  static navigationOptions = {
    title: 'Step 8 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <AnnualUnusedLeaveTemplate
        updateAnnualSickUnusedLeave={e =>
          this.props.updateAnnualSickUnusedLeave(e)
        }
        updateAnnualUnusedLeave={e => this.props.updateAnnualUnusedLeave(e)}
        unusedSickLeaveHours={this.props.scenario.unused_sick_leave_hours}
        unusedAnnualLeaveHours={this.props.scenario.unused_annual_leave_hours}
        onComplete={() => navigate('AdditionalOptions')}
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
  updateAnnualUnusedLeave,
  updateAnnualSickUnusedLeave,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnnualUnusedLeaveContainer);
